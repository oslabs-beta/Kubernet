import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import styles from '../styles/RootLayout.module.scss';

import logo from '../assets/logo.png';

function RootLayout() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.div}>
          <img src={logo} alt='pretty logo' className={styles.logo} />
          <NavLink to='/' className={styles.link}>
            Home
          </NavLink>
        </div>

        <span className={styles.title}>Kubernét</span>

        <div>
          <NavLink to='/' className={styles.link}>
            About
          </NavLink>
          {/* Dark/Light mode here */}
        </div>
      </header>

      <main className={styles.outlet}>
        <Outlet />
        <p className={styles.copy}>© 2023 Kubernét</p>
      </main>
    </div>
  );
}

export default RootLayout;
