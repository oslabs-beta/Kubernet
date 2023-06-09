//  Dependencies
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//  Styles
import styles from '../styles/Home.module.scss';

//  Child Component
import WineGlass from '../assets/WineGlass';

function LoginPage(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  //  User authentication 
  const handleLogin = async (e: React.FormEvent<HTMLFormElement> ): Promise<void> => {
    e.preventDefault();
    try {
      setLoading(true);
      const usernameInput = e.currentTarget.elements[0] as HTMLInputElement;
      const passwordInput = e.currentTarget.elements[1] as HTMLInputElement;

      const username: string = usernameInput.value;
      const password: string = passwordInput.value;

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
      else {
        setLoading(false);
      }
      
      //  What if response was not ok
    } catch (err) {
      //  Better error handler
      console.log(err);
    }
  };

  let render: JSX.Element = (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.box}>
          <form className={styles.form} onSubmit={handleLogin}>
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

            <button className={styles.primary}>Login</button>
          </form>

          <button
            className={styles.secondary}
            onClick={() => {
              navigate('/signupPage');
            }}>
            <i>create an account</i>
          </button>
        </div>
      </div>
    </React.Fragment>
  );

  if (loading) render = <WineGlass />;

  return <React.Fragment>{render}</React.Fragment>;
}

export default LoginPage;
