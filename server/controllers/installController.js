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

  spawnSync(
    'helm repo add stable https://kubernetes-charts.storage.googleapis.com/',
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

module.exports = installController;
