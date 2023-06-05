const { exec, execSync, spawn, spawnSync } = require('child_process');

const installController = {};

/**
 * Install prometheus
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */

installController.promInstall = (req, res, next) => {
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
    'helm install prometheusOSP prometheus-community/kube-prometheus-stack',
    { stdio: 'inherit', shell: true }
  );

  return next();
};

/**
 *  Forwards port to 3000
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
installController.portForward = (req, res, next) => {
  console.log('Forwarding ports to localhost:3000');

  //  Attempts for forward cluster port 3000 to localhost 3000
  const port = spawn(
    'kubectl port-forward deployment/prometheus-grafana 3000',
    { shell: true }
  );

  port.stdout.on('data', (data) => {
    console.log('Success! Grafana can now be access on localhost:3000');
    return next();
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
};

module.exports = installController;
