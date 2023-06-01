import React, { Component, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Dashboard.module.scss';

function Dashboard() {
  return (
    <>
      <div className={styles.numericMetrics}>
        <iframe
          src='https://www.google.com/webhp?igu=1'
          width='450'
          height='200'
          frameborder='0'
        ></iframe>
        <iframe
          src='http://localhost:3000/d-solo/efa86fd1d0c121a26444b636a3f509a8/kubernetes-compute-resources-cluster?orgId=1&refresh=10s&from=1685626615866&to=1685630215866&panelId=4'
          width='450'
          height='200'
          frameborder='0'
        ></iframe>
        <iframe
          src='http://localhost:3000/d-solo/efa86fd1d0c121a26444b636a3f509a8/kubernetes-compute-resources-cluster?orgId=1&refresh=10s&from=1685626615866&to=1685630215866&panelId=4'
          width='450'
          height='200'
          frameborder='0'
        ></iframe>
      </div>
      <div className={styles.chartMetrics}>
        <iframe
          src='http://localhost:3000/d-solo/efa86fd1d0c121a26444b636a3f509a8/kubernetes-compute-resources-cluster?orgId=1&refresh=10s&from=1685626670249&to=1685630270249&panelId=7'
          width='450'
          height='200'
          frameborder='0'
        ></iframe>
        <iframe
          src='http://localhost:3000/d-solo/efa86fd1d0c121a26444b636a3f509a8/kubernetes-compute-resources-cluster?orgId=1&refresh=10s&from=1685626705202&to=1685630305202&panelId=9'
          width='450'
          height='200'
          frameborder='0'
        ></iframe>
      </div>
    </>
  );
}

export default Dashboard;
