import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from '../styles/Dashboard.module.scss';

function Dashboard() {
  const location = useLocation();
  const data = location?.state?.data;
  const iframeArray = [];
  const navigate = useNavigate();

  if (!data) {
    useEffect(() => navigate('/', { state: { notLogged: true } }), []);
  }

  if (data) {
    for (const [graph, url] of Object.entries(data)) {
      iframeArray.push(
        <iframe
          src={url}
          key={graph}
          width='450'
          height='200'
          frameborder='0'
        ></iframe>
      );
    }
    return (
      <div className={styles.container} data-testid="myIframe">
        <div className={styles.numericMetrics}>
          {[iframeArray[0]].concat(iframeArray[2])}
        </div>
        <div className={styles.chartMetrics}>
          {[iframeArray[1]].concat(iframeArray[3])}
        </div>
      </div>
    );
  }
} //  Notes
export default Dashboard;
