//  Dependencies
import React from 'react';
import { useNavigate } from 'react-router-dom';

//  Styles
import styles from '../styles/Home.module.scss';

//  User  Authentication
function SignupPage(): JSX.Element {
  const navigate = useNavigate();

  const handleSignup = async (e: any) => {
    e.preventDefault();

    try {
      const username: string = e.target[0].value;
      const password: string = e.target[1].value;

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
        <form className={styles.form} onSubmit={handleSignup}>
          <input type='text' placeholder='Username' className={styles.input} />

          <input
            type='password'
            placeholder='Password'
            className={styles.input}
          />
          <button className={styles.primary}>Create Account</button>
        </form>

        <button
          className={styles.secondary}
          onClick={() => {
            navigate('/loginPage');
          }}>
          <i>already have an account?</i>
        </button>
      </div>
    </div>
  );
}

export default SignupPage;
