import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, getByRole, getByText, render, screen, waitFor} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router, createMemoryRouter, createRoutesFromElements, Route, Routes, RouterProvider } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import { server } from '../mocks/server';

import LoginPage from '../client/src/pages/LoginPage';
import Dashboard from '../client/src/pages/Dashboard';
import SignupPage from '../client/src/pages/SignupPage';
import Installation from '../client/src/pages/Installation';
jest.mock('./WineSwirl.gif', () => './__mocks__/WineSwirl.gif');

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

// returns an array of objects where each object is a route
const appRoutes = createRoutesFromElements(
  <>
    <Route path='/' element={<Installation />} />
    <Route path='/loginPage' element={<LoginPage />} />
    <Route path='/signupPage' element={<SignupPage />} />
    <Route path='/dashboard' element={<Dashboard />} />
  </>
);



describe('LoginPage', () => {

  describe('Rendering', () => {
    beforeEach(() => {
      const memoryRouter = createMemoryRouter(appRoutes, {initialEntries: ['/loginPage']});
      
      render(
        <RouterProvider router={memoryRouter}/>
      )
    })
    test('Checks if Username input field is on the page', () => {
      expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
    });
  
    test('Checks if Password input field is on the page', () => {
      expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    });
  
    test('Checks if Login button is on the page', () => {
      const loginButton = screen.getByRole('button', {name:'Login'});
      expect(loginButton).toBeInTheDocument();
    });
  
    test("Checks if 'create an account' button is on the page", () => {
      const createAnAccount = screen.getByRole('button', {name: 'create an account'});
      expect(createAnAccount).toBeInTheDocument();
    });
  });

  describe('Behavior', () => {
    beforeEach(() => {
      const memoryRouter = createMemoryRouter(appRoutes, {initialEntries: ['/loginPage']});
      
      render(
        <RouterProvider router={memoryRouter}/>
      )
    })
    test('User types in login details and is navigated to dashboard',async () => {
      const loginBtn = screen.getByRole('button', {name: 'Login'});
      const userNameInput = screen.getByPlaceholderText('Username') as HTMLInputElement;
      const passwordInput = screen.getByPlaceholderText('Password') as HTMLInputElement;
   
      await userEvent.type(userNameInput, 'james');
      await userEvent.type(passwordInput, 'james123');
      
      expect(userNameInput.value).toBe('james');
      expect(passwordInput.value).toBe('james123');

      await userEvent.click(loginBtn);

      waitFor(async() => {
        await screen.findByTitle('myIframe', {})
        expect(screen.findByTitle('myIframe')).toBeInTheDocument();
      })
 
      
    })

  

    
 
  })
  


})