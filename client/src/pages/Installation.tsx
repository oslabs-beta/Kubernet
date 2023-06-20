//  Dependencies
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//  Styles
import styles from './Installation.module.scss';

function Installation(): JSX.Element {
  const navigate = useNavigate();

  const killPort = async () => {
    await fetch('http://localhost:5050/killPort')
      .then(res => console.log(res));
  }

  let render: JSX.Element = (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.box}>
          <button className={styles.primary} onClick={() => {
            killPort();
            navigate('/signupPage');
          }}>
            Get Started
          </button>
          <button className={styles.secondary} onClick={() => {
            killPort();
            navigate('/loginPage');
          }}>
            <i>already have an account?</i>
          </button>
        </div>
      </div>
    </React.Fragment>
  );

  return <React.Fragment>{render}</React.Fragment>;
}

export default Installation;
