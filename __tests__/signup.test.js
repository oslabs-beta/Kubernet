import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import {
  createRoutesFromElements,
  Route,
  createMemoryRouter,
  RouterProvider,
} from 'react-router-dom';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { server } from '../mocks/server';

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
  // Establish API mocking before all tests.
  beforeAll(() => server.listen());

  // Reset any request handlers that we may add during the tests,
  // so they don't affect other tests.
  afterEach(() => server.resetHandlers());

  // Clean up after the tests are finished.
  afterAll(() => server.close());

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

  describe('User Actions', () => {
    test('Clicking "already have an account?" should navigate to login page', async () => {
      const router = createMemoryRouter(theRoutes, {
        initialEntries: ['/signupPage'],
      });
      render(<RouterProvider router={router} />);
      expect(screen.queryByText('Login')).not.toBeInTheDocument();
      await userEvent.click(screen.getByText('already have an account?'));
      expect(screen.getByText('Login')).toBeInTheDocument();
    });

    test('Should enter username and password and click on login button', async () => {
      const router = createMemoryRouter(theRoutes, {
        initialEntries: ['/signupPage'],
      });
      render(<RouterProvider router={router} />);

      const usernameInput = screen.getByPlaceholderText('Username');
      const passwordInput = screen.getByPlaceholderText('Password');
      const createAccountButton = screen.getByRole('button', {
        name: 'Create Account',
      });

      await userEvent.type(usernameInput, 'james');
      await userEvent.type(passwordInput, 'james123');

      expect(usernameInput.value).toBe('james');
      expect(passwordInput.value).toBe('james123');

      expect(screen.queryByTestId('myIframe')).not.toBeInTheDocument();
      await userEvent.click(createAccountButton);
      // await screen.findByRole('iframe');
      waitFor(async () => {
        await screen.findByTitle('myIframe', {});
        expect(screen.findByTitle('myIframe', {})).toBeInTheDocument();
      });
    });
  });
});
