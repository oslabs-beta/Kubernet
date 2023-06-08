import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../styles/Dashboard.module.scss';

function Dashboard() {
  const location = useLocation();
  const { data } = location.state;
  const iframeArray = [];

  for (const [graph, url] of Object.entries(data)) {
    iframeArray.push(
      <iframe
        src={url}
        key={graph}
        width='450'
        height='200'
        frameborder='0'></iframe>
    );
  }
  return <div className={styles.container}>
      <div className={styles.numericMetrics}>{[iframeArray[0]].concat(iframeArray[2])}</div>
      <div className={styles.chartMetrics}>{[iframeArray[1]].concat(iframeArray[3])}</div>
    </div>
}//  Notes
export default Dashboard;
