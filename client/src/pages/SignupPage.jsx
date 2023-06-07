import React, { Component, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Home.module.scss';

function SignupPage() {
  const [state, setState] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const usernameChangeEvent = (event) => {
    setUsername(event.target.value);
  };

  const passwordChangeEvent = (event) => {
    setPassword(event.target.value);
  };
  const navigateLogin = function () {
    navigate('/loginPage');
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const username = e.target[0].value;
      const password = e.target[1].value;

      const response = await fetch('http://localhost:5050/signup', {
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

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <form onSubmit={handleSignup}>
          <h2 className={styles.header}>Enter to Sign up</h2>

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
          <input
            type='submit'
            value='Sign Up!'
            className={styles.primaryButton}
          ></input>
        </form>
        <button onClick={navigateLogin} className={styles.secondaryButton}>
          Have an Account?
        </button>
      </div>
    </div>
  );
}

export default SignupPage;