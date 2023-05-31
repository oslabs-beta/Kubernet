import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <div id='root-layout'>
      <header>
        <nav>
          <NavLink to='/' className='signout'>
            Home
          </NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
