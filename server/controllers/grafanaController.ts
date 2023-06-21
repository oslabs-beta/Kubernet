import { Request, Response, NextFunction } from 'express';
import fullDashboard from '../panels/KubernetFullDash.json';

const urlStore: { fullDashboard?: string } = {};

const grafanaController = {
  createDashboard: (req: Request, res: Response, next: NextFunction) => {
    res.locals.createdNewDashboard = false;
    if (res.locals.URLS) return next();
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
          title: `Kubernét`,
          timezone: 'browser',
          tags: ['templated'],
          schemaVersion: 16,
          version: 0,
          refresh: '15s',
          panels: fullDashboard,
        },
        folderId: 0,
        message: '',
        overwrite: false,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        const { uid } = data;
        urlStore.fullDashboard = `http://localhost:3000/d/${uid}/KubernetSuperSpecialDashboard?theme=light&orgId=1&refresh=5s`;
        res.locals.URLS = urlStore;
        res.locals.createdNewDashboard = true;
        return next();
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  },
};

export default grafanaController;
