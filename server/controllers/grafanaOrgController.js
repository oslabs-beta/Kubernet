const cpuUtil = require('../panels/Cluster_CPU_Utilisation.json');
const cpuUtilGraph = require('../panels/Cluster_CPU_Utilisation_Graph.json');
const memUtil = require('../panels/Cluster_Memory_Utilisation.json');
const memUtilGraph = require('../panels/Cluster_Memory_Utilisation_Graph.json');

const urlStore = {};

const grafanaController = {
  cpuUtil: (req, res, next) => {
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
          title: `cpuUtil ${Date.now()}`,
          timezone: 'browser',
          tags: ['templated'],
          schemaVersion: 16,
          version: 0,
          refresh: '15s',
          panels: [cpuUtil],
        },
        folderId: 0,
        message: 'Made changes to xyz',
        overwrite: false,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        const { url } = data;
        urlStore.cpuUtil = `http://localhost:3000${url}`;
        return next();
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  },
  cpuUtilGraph: (req, res, next) => {
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
          title: `cpuUtilGraph ${Date.now()}`,
          timezone: 'browser',
          tags: ['templated'],
          schemaVersion: 16,
          version: 0,
          refresh: '15s',
          panels: [cpuUtilGraph],
        },
        folderId: 0,
        message: 'Made changes to xyz',
        overwrite: false,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        const { url } = data;
        urlStore.cpuUtilGraph = `http://localhost:3000${url}`;
        return next();
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  },
  memUtil: (req, res, next) => {
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
          title: `memUtil ${Date.now()}`,
          timezone: 'browser',
          tags: ['templated'],
          schemaVersion: 16,
          version: 0,
          refresh: '15s',
          panels: [memUtil],
        },
        folderId: 0,
        message: 'Made changes to xyz',
        overwrite: false,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        const { url } = data;
        urlStore.memUtil = `http://localhost:3000${url}`;
        return next();
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  },
  memUtilGraph: (req, res, next) => {
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
          title: `memUtilGraph ${Date.now()}`,
          timezone: 'browser',
          tags: ['templated'],
          schemaVersion: 16,
          version: 0,
          refresh: '15s',
          panels: [memUtilGraph],
        },
        folderId: 0,
        message: 'Made changes to xyz',
        overwrite: false,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        const { url } = data;
        urlStore.memUtilGraph = `http://localhost:3000${url}`;
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
