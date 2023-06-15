import { spawn, spawnSync } from 'child_process';
import { Request, Response, NextFunction } from 'express';

interface InstallController {
  promInstall: (req: Request, res: Response, next: NextFunction) => void;
  grafEmbed: (req: Request, res: Response, next: NextFunction) => void;
  portForward: (req: Request, res: Response, next: NextFunction) => void;
}

const installController: InstallController = {
  /**
   * Install Prometheus
   */
  promInstall: (req: Request, res: Response, next: NextFunction) => {
    console.log('Initializing prometheus!');

    //  Adding prometheus repo to helm
    spawnSync(
      'helm repo add prometheus-community https://prometheus-community.github.io/helm-charts',
      { stdio: 'inherit', shell: true }
    );

    //  Updating the repo
    spawnSync('helm repo update', { stdio: 'inherit', shell: true });

    //  Installs helm chart with the label prometheusOSP
    spawnSync(
      'helm install prometheus prometheus-community/kube-prometheus-stack',
      { stdio: 'inherit', shell: true }
    );

    return next();
  },
  /**
   * Embed Grafana
   */
  grafEmbed: (req: Request, res: Response, next: NextFunction) => {
    console.log('Embedding grafana');

    //  Executing kubectl get pods
    const child = spawnSync('kubectl', ['get', 'pods'], { encoding: 'utf-8' });

    //  Error handler
    if (child.stderr) {
      console.error(`kubectl get pods error: ${child.stderr}`);
      return next({
        log: 'Express error handler caught! grafEmbed middleware error',
        status: 500,
        message: {
          err: 'An error occurred while attempting to get pods',
        },
      });
    }
    //  Assigning the console statement to a constant
    const output = child.stdout.split('\n');

    //  Searching for the prometheus-grafana pod
    let pod;
    output.forEach((line) => {
      if (line.includes('prometheus-grafana')) {
        [pod] = line.split(' ');
      }
    });

    // Delete previous config map
    spawnSync('kubectl delete configmap prometheus-grafana', {
      stdio: 'inherit',
      shell: true,
    });

    //  Applying custom yaml file
    spawnSync('kubectl apply -f prometheus-grafana.yaml', {
      stdio: 'inherit',
      shell: true,
    });

    //  Delete old prometheus-grafana pod
    spawnSync(`kubectl delete pod ${pod}`, { stdio: 'inherit', shell: true });

    setTimeout(() => next(), 6000);
  },
  /**
   * Forward Ports
   */
  portForward: (req: Request, res: Response, next: NextFunction) => {
    console.log('Forwarding ports to localhost:3000');

    //  Attempts for forward cluster port 3000 to localhost 3000
    const port = spawn(
      'kubectl port-forward deployment/prometheus-grafana 3000',
      { shell: true }
    );

    //  Moves to next middleware if port forward was successful
    port.stdout.on('data', (data) => {
      console.log('Success! Grafana can now be access on localhost:3000');
      // return next();
    });

    port.stderr.on('data', (data) => {
      console.error(`grafana port forwarding error: ${data}`);
      return next({
        log: 'Express error handler caught! portForward middleware error',
        status: 500,
        message: {
          err: 'An error occurred while attempting to forward a port to localhost:3000',
        },
      });
    });

    return next();
  },
};

export default installController;
