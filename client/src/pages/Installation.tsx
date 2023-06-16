//  Dependencies
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//  Styles
import styles from './Installation.module.scss';

//  Child Component
import WineGlass from '../assets/WineGlass';

function Installation(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  //  Executes terminal commands that installs prometheus/grafana, updated k8s configmap
  async function installAll(): Promise<void> {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5050/install');

      if (!response.ok) {
        //  Throw new error
      }

      setLoading(false);
      navigate('/signupPage');
    } catch (err) {
      //  Better error handler here
      console.log(err);
    }
  }

  //  Executes terminal commands that connects container port to local port
  async function portForward(): Promise<void> {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5050/portforward');

      if (!response.ok) {
        //  Throw new error
        console.log('Unable to Port-Forward');
      }

      setLoading(false);
      navigate('/loginPage');
    } catch (err) {
      //  Better error handler here
      console.log(err);
    }
  }

  let render: JSX.Element = (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.box}>
          <button className={styles.primary} onClick={installAll}>
            Get Started
          </button>
          <button className={styles.secondary} onClick={portForward}>
            <i>already have an account?</i>
          </button>
        </div>
      </div>
    </React.Fragment>
  );

  if (loading) render = <WineGlass />;

  return <React.Fragment>{render}</React.Fragment>;
}

export default Installation;
