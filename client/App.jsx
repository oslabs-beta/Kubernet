//Dependancies
import React, { Component } from 'react';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

//imported pages
import LoginPage from './src/pages/login';
import Dashboard from './src/pages/dashboard';
import Signup from './src/pages/signup';
import Installation from './src/pages/Installation';
import RootLayout from './src/components/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path='/' element={<Installation />} />
      <Route path='/loginPage' element={<LoginPage />} />
      <Route path='/signupPage' element={<Signup />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
