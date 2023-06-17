import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Home.module.scss';


function SignupPage(): JSX.Element {
  const navigate = useNavigate();

  const navigateLogin = function (): void {
    navigate('/loginPage');
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const usernameInput = e.currentTarget.elements[0] as HTMLInputElement;
      const passwordInput = e.currentTarget.elements[1] as HTMLInputElement;

      const username: string = usernameInput.value;
      const password: string = passwordInput.value;

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

        <button className={styles.secondary} onClick={navigateLogin}>
          <i>already have an account?</i>
        </button>
      </div>
    </div>
  );
}

export default SignupPage;
