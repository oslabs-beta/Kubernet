import React, { Component, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Home.module.scss';
import WineGlass from '../assets/WineGlass';

function HomePage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const navigateSignup = function () {
    navigate('/signupPage');
  };

  const navigateLogin = function () {
    navigate('/loginPage');
  };

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
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      {loading ? (
        <>
          <WineGlass />

          <button onClick={loadingPretend}>
            Click to toggle loading wineglass
          </button>
        </>
      ) : (
        <div className={styles.container}>
          <div className={styles.loginBox}>
            <button onClick={installAll}>Install All</button>
            <button onClick={navigateLogin}>Navigate Login</button>
            <button onClick={navigateSignup}>Navigate Signup</button>
            <button onClick={loadingPretend}>
              Click this to see loading wineglass
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default HomePage;
