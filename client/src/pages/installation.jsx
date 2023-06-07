import React, { Component, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Home.module.scss';
import WineGlass from '../assets/WineGlass';

function HomePage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function loadingPretend() {
    setLoading((val) => !val);
  }

  async function installAll() {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5050/install');

      if (!response.ok) {
        console.log('Error installing');
      }
      setLoading(false);
      const json = await response.json();
      console.log(json);
      navigate('/signupPage');
    } catch (err) {
      console.log(err);
    }
  }

  async function portForward(){
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5050/portforward');

      if (!response.ok){
        console.log('Unable to Port-Forward')
      }

      setLoading(false);
      const json = await response.json();
      console.log(json);
      navigate('/loginPage');
    } catch (err){
    console.log(err)};
  }

  return (
    <>
      {loading ? (
        <>
          <WineGlass />
          <h1>Aerating...</h1>
        </>
      ) : (
        <div className={styles.container}>
          <div className={styles.loginBox}>
            <button onClick={installAll}>New User</button>
            <button onClick={portForward}>Already Have an Account</button>
          </div>
        </div>
      )}
    </>
  );
}

export default HomePage;
