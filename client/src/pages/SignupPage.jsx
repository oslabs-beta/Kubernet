import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Home.module.scss';

function SignupPage() {
  const navigate = useNavigate();

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
        navigate('/dashboard', { state: { data } });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <form onSubmit={handleSignup}>

          <input type='text' placeholder='Username' className={styles.input} />

          <input
            type='password'
            placeholder='Password'
            className={styles.input}
          />

          <div className={styles.buttons}>
            <input
              type='submit'
              value='Create Account'
              className={styles.primaryButton}
            />
            
            <input
              type='button'
              value='Have an Account?'
              className={styles.secondaryButton}
              onClick={navigateLogin}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
