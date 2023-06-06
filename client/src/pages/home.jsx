import React, { Component, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Home.module.scss';
import WineSwirl from '../assets/WineGlass.gif';

function HomePage() {
  const [state, setState] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const usernameChangeEvent = (event) => {
    setUsername(event.target.value);
  };

  const passwordChangeEvent = (event) => {
    setPassword(event.target.value);
  };
  const navigateSignup = function () {
    navigate('/signup');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // const response = await fetch('/login', {
      //   method: 'post',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ username, password }),
      // });

      // if (response.ok) {
      console.log(username, password);
      navigate('/dashboard');
      //   }
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
        <div className={styles.container}>
          <img
            src={WineSwirl}
            alt='loading...'
            style={{ height: '480px', width: '640px' }}
          ></img>
          <p>Aerating your metrics</p>

          <button onClick={loadingPretend}>
            Click to toggle loading wineglass
          </button>
        </div>
      ) : (
        <div className={styles.container}>
          <form onSubmit={handleLogin} className={styles.loginBox}>
            <h2 className={styles.header}>Welcome Back</h2>
            <input
              type='text'
              value={username}
              onChange={usernameChangeEvent}
              placeholder='Username'
              className={styles.input}
            ></input>

            <input
              type='password'
              value={password}
              placeholder='Password'
              onChange={passwordChangeEvent}
              className={styles.input}
            ></input>
            <button onClick={navigateSignup} className={styles.secondaryButton}>
              Sign Up
            </button>
            <input
              type='submit'
              value='Login'
              className={styles.primaryButton}
            ></input>
          </form>
          <button onClick={loadingPretend}>
            Click this to see loading wineglass
          </button>
        </div>
      )}
    </>
  );
}

export default HomePage;
