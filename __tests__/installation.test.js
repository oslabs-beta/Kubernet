import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, getByRole, getByText, render, screen, waitFor} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router, createMemoryRouter, createRoutesFromElements, Route, Routes, RouterProvider } from 'react-router-dom';
import userEvent from '@testing-library/user-event';



import { server } from '../mocks/server';

// import our components
import LoginPage from '../client/src/pages/LoginPage';
import Dashboard from '../client/src/pages/Dashboard';
import SignupPage from '../client/src/pages/SignupPage';
import Installation from '../client/src/pages/Installation';
jest.mock('./WineSwirl.gif', () => 'path/to/mock/image.png');

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


describe(Installation, () => {
  describe('Rendering', () => {
    beforeEach(() => {
      const memoryRouter = createMemoryRouter(appRoutes, {initialEntries: ['/']});
      
      render(
        <RouterProvider router={memoryRouter}/>
      )
    })
    test('Installation page displays the Get Started Button', () => {
      const getStartedButton = screen.getByRole('button', {name: 'Get Started'});
      
      expect(getStartedButton).toBeInTheDocument();
    })

    test("Displays button 'already have an account?'", () => {
      const alreadyHaveAnAccountButton = screen.getByText('already have an account?')
      expect(alreadyHaveAnAccountButton).toBeInTheDocument();
    })
  })

  describe('Navigation', () => {
    beforeEach(() => {
      const memoryRouter = createMemoryRouter(appRoutes, {initialEntries: ['/']});
      render(
        <RouterProvider router={memoryRouter}/>
      )
    })

    test("User is navigated to sign up page when they click on 'Get Started' button", async () => {
      const getStartedBtn = screen.getByRole('button', {name: "Get Started"});

      expect(screen.queryByText('Get Started')).toBeInTheDocument();
      expect(screen.queryByText('Create Account')).not.toBeInTheDocument();

      await userEvent.click(getStartedBtn);
      await waitFor(() => {screen.findByText('Create Account')});

      expect(screen.getByText('Create Account')).toBeInTheDocument();
    } )

    test("User is routed to login page when they click on 'already have an account?' button", async () => {
      
      const hasAnAccountBtn = screen.getByRole('button', {name: 'already have an account?'})
      
      expect(screen.queryByText('Login')).not.toBeInTheDocument();

      await userEvent.click(hasAnAccountBtn);
      await waitFor(() => {screen.findByText('Login')});
      expect(screen.getByText('Login')).toBeInTheDocument();
    })
  })

  
});

