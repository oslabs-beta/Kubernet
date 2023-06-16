import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import SignupPage from '../client/src/pages/SignupPage';
import { server } from '../mocks/server';
import userEvent from '@testing-library/user-event';

describe('Sign Up', () => {
  beforeAll(() => {
    server.listen();
  });
  afterAll(() => {
    server.resetHandlers();
  });
  afterEach(() => {
    server.close();
  });

  // beforeEach(() => {
  //   render(
  //     <Router>
  //       <SignupPage />
  //     </Router>
  //   );
  // });

  describe('Signup - Rendering', () => {
    beforeEach(() => {
      render(
        <Router>
          <SignupPage />
        </Router>
      );
    });
    test('Login page loads with Username input field', async () => {
      // Check if username field exists
      const usernameInput = screen.getByPlaceholderText('Username');
      expect(usernameInput).toBeInTheDocument();
    });

    test('Login page loads with Password input field', async () => {
      // Check if password field exists
      const passwordInput = screen.getByPlaceholderText('Password');
      expect(passwordInput).toBeInTheDocument();
    });

    test('Signup page loads with "Create Account" button', async () => {
      // Check if password field exists
      const createAccountButton = screen.getByText('Create Account');
      expect(createAccountButton).toBeInTheDocument();
    });

    test('Signup page loads with "already have an account?" button', async () => {
      // Check if password field exists
      const sendToLoginButton = screen.getByText('already have an account?');
      expect(sendToLoginButton).toBeInTheDocument();
    });
  });

  describe('Signup - Behavior', () => {
    test('Should enter username and password and click on login button', async () => {
      // const user = userEvent.setup();
      render(
        <Router>
          <SignupPage />
        </Router>
      );
      const usernameInput = screen.getByPlaceholderText('Username');
      const passwordInput = screen.getByPlaceholderText('Password');
      const sendToLoginButton = screen.getByText('already have an account?');

      await userEvent.type(usernameInput, 'testUser');
      expect(usernameInput).toHaveValue('testUser');
      await userEvent.type(passwordInput, 'testPassword');
      expect(passwordInput).toHaveValue('testPassword');
      fireEvent.submit(sendToLoginButton);
      // await userEvent.click(screen.getByText('Create Account'));
    });
    test('Handles Navigate Login', () => {});
  });
});
