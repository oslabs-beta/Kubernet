const cpuUtil = require('../panels/Cluster_CPU_Utilisation_156.json');
const cpuUtilGraph = require('../panels/Cluster_CPU_Utilisation_Graph_155.json');
const memUtil = require('../panels/Cluster_Memory_Utilisation_158.json');
const memUtilGraph = require('../panels/Cluster_Memory_Utilisation_Graph_157.json');

const urlStore = {};

const grafanaController = {
  getPanels: (req, res, next) => {
    fetch('http://localhost:3000/api/dashboards/db', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        dashboard: {
          id: null,
          uid: null,
          title: `KubernetSuperSpecialDashboard`,
          timezone: 'browser',
          tags: ['templated'],
          schemaVersion: 16,
          version: 0,
          refresh: '15s',
          panels: [cpuUtil, cpuUtilGraph, memUtil, memUtilGraph],
        },
        folderId: 0,
        message: '',
        overwrite: false,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        // console.log(data);
        const { uid } = data;
        urlStore.cpuUtil = `http://localhost:3000/d-solo/${uid}/KubernetSuperSpecialDashboard/?panelId=156&orgId=1&refresh=5s`;
        urlStore.cpuUtilGraph = `http://localhost:3000/d-solo/${uid}/KubernetSuperSpecialDashboard/?panelId=155&orgId=1&refresh=5s`;
        urlStore.memUtil = `http://localhost:3000/d-solo/${uid}/KubernetSuperSpecialDashboard/?panelId=158&orgId=1&refresh=5s`;
        urlStore.memUtilGraph = `http://localhost:3000/d-solo/${uid}/KubernetSuperSpecialDashboard/?panelId=157&orgId=1&refresh=5s`;
        res.locals.URLS = urlStore;
        return next();
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  },
};

module.exports = grafanaController;
