import React, { Component, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Home.module.scss';
import WineGlass from '../assets/WineGlass';

function HomePage() {
  const [state, setState] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const navigateSignup = function () {
    navigate('/signupPage');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const username = e.target[0].value;
      const password = e.target[1].value;

      const response = await fetch('/login', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(username, password);
        navigate('/dashboard', { state: { data } });
      }
    } catch (err) {
      console.log(err);
    }
  };

  function loadingPretend() {
    setLoading((val) => !val);
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
            <form onSubmit={handleLogin}>
              <h2 className={styles.header}>Welcome Back</h2>
              <input
                type='text'
                placeholder='Username'
                className={styles.input}
              ></input>

              <input
                type='password'
                placeholder='Password'
                className={styles.input}
              ></input>
              <input
                type='submit'
                value='Login'
                className={styles.primaryButton}
              ></input>
            </form>
            <button className={styles.secondaryButton} onClick={navigateSignup}>
              Click here to Sign Up
            </button>

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
