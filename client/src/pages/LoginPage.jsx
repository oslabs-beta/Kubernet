import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Home.module.scss';
import WineGlass from '../assets/WineGlass';

function LoginPage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const navigateSignup = function () {
    navigate('/signupPage');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const username = e.target[0].value;
      const password = e.target[1].value;

      const response = await fetch('http://localhost:5050/login', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setLoading(false);
        navigate('/dashboard', { state: { data } });
      }

      //  What if response was not ok
    } catch (err) {
      //  Better error handler
      console.log(err);
    }
  };

  let render = (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.loginBox}>
          <form onSubmit={handleLogin}>
            <h2 className={styles.header}>Kubernet</h2>
            <input
              type='text'
              placeholder='Username'
              className={styles.input}
            />
          
            <input
              type='password'
              placeholder='Password'
              className={styles.input}
            />
            <div class={styles.buttons}>
              <input
                type='submit'
                value='Login'
                className={styles.primaryButton}
              />
              <input
                type='button'
                value= 'Signup'
                onClick={navigateSignup}
                className={styles.secondaryButton}
              />
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );

  if (loading) render = <WineGlass />;

  return <React.Fragment>{render}</React.Fragment>;
}

export default LoginPage;
