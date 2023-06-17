import React from 'react';
import {
  render,
  screen,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import {
  BrowserRouter as Router,
  createRoutesFromElements,
  Route,
  createMemoryRouter,
  RouterProvider,
} from 'react-router-dom';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

//imported pages
import LoginPage from '../client/src/pages/LoginPage';
import Dashboard from '../client/src/pages/Dashboard';
import SignupPage from '../client/src/pages/SignupPage';
import Installation from '../client/src/pages/Installation.tsx';

const theRoutes = createRoutesFromElements(
  <>
    <Route path="/" element={<Installation />} />
    <Route path="/loginPage" element={<LoginPage />} />
    <Route path="/signupPage" element={<SignupPage />} />
    <Route path="/dashboard" element={<Dashboard />} />
  </>
);

describe('Signup Page', () => {
  describe('Rendering', () => {
    beforeEach(() => {
      const router = createMemoryRouter(theRoutes, {
        initialEntries: ['/signupPage'],
      });
      render(<RouterProvider router={router} />);
    });

    test('Signup page loads with Username input field', async () => {
      expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
    });

    test('Signup page loads with Password input field', async () => {
      expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    });

    test('Signup page loads with "Create Account" button', async () => {
      expect(screen.getByText('Create Account')).toBeInTheDocument();
    });

    test('Signup page loads with "already have an account?" button', async () => {
      expect(screen.getByText('already have an account?')).toBeInTheDocument();
    });
  });

  describe('Behavior', () => {
    test('Clicking "already have an account?" should navigate to login page', async () => {
      const router = createMemoryRouter(theRoutes, {
        initialEntries: ['/signupPage'],
      });
      render(<RouterProvider router={router} />);
      expect(screen.queryByText('Login')).not.toBeInTheDocument();
      await userEvent.click(screen.getByText('already have an account?'));
      expect(screen.queryByText('Login')).toBeInTheDocument();
    });

    // test('Should enter username and password and click on login button', async () => {
    //   // const user = userEvent.setup();
    //   const router = createMemoryRouter(theRoutes, {
    //     initialEntries: ['/signupPage'],
    //   });
    //   render(<RouterProvider router={router} />);

    //   const usernameInput = screen.getByPlaceholderText('Username');
    //   const passwordInput = screen.getByPlaceholderText('Password');
    //   const createAccountButton = screen.getByText('Create Account');

    //   await userEvent.type(usernameInput, 'testUser');
    //   expect(usernameInput).toHaveValue('testUser');
    //   await userEvent.type(passwordInput, 'testPassword');
    //   expect(passwordInput).toHaveValue('testPassword');
    //   expect(screen.queryByTestId('iframe')).not.toBeInTheDocument();
    //   await userEvent.click(createAccountButton);
    //   // await screen.findByRole('iframe');
    //   expect(screen.getByRole('iframe')).toBeInTheDocument();
    // });
  });
});
