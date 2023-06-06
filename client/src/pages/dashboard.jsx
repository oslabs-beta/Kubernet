import React, { Component, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
        frameborder='0'
      ></iframe>
    );
  }
  return (
    <>
      <div className={styles.numericMetrics}>{iframeArray}</div>
    </>
  );
}

export default Dashboard;
