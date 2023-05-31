//Dependancies
import React, { Component } from 'react';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

//imported pages
import HomePage from './src/pages/home';
import Dashboard from './src/pages/dashboard';
import RootLayout from './src/components/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path='/' element={<HomePage />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
