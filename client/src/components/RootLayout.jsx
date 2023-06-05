import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from '../styles/RootLayout.module.scss';

function RootLayout() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav>
          <NavLink to='/' className='signout'>
            Home
          </NavLink>
        </nav>
      </header>

      <main className={styles.outlet}>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
