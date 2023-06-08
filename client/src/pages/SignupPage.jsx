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
      <div className={styles.loginBox}>
        <form onSubmit={handleSignup}>
          <h2 className={styles.header}>Enter to Sign up</h2>

          <input type='text' placeholder='Username' className={styles.input} />

          <input
            type='password'
            placeholder='Password'
            className={styles.input}
          />

          <input
            type='submit'
            value='Sign Up!'
            className={styles.primaryButton}
          />
          
        </form>

        <button onClick={navigateLogin} className={styles.secondaryButton}>
          Have an Account?
        </button>
      </div>
    </div>
  );
}

export default SignupPage;
