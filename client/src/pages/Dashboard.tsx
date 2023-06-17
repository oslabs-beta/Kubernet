//  Dependencies
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

//  Styles
import styles from '../styles/Dashboard.module.scss';

function Dashboard(): JSX.Element {
  const location = useLocation();
  const data: { [key: string]: string } = location?.state?.data;
  const iframeArray: JSX.Element[] = [];
  const navigate = useNavigate();
  
  //  Front end authentication
  if (!data) {
    useEffect(() => navigate('/'), []);
  }

  if (data) {
    for (const [graph, url] of Object.entries(data)) {
      iframeArray.push(<iframe title='myIframe' src={url} key={graph}></iframe>);
    }
    return <div className={styles.container}>{iframeArray[0]}</div>;
  }
}
export default Dashboard;
