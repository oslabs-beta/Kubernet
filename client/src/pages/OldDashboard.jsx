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
          width= '95%'
          height='100%'
          frameborder='0'
        ></iframe>
      );
    }
    return (
      <div className={styles.container}>
        {iframeArray[0]}
      </div>
    );
  }
} //  Notes
export default Dashboard;
