import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import SignupPage from '../client/src/pages/SignupPage';

describe('Sign Up', () => {
  beforeEach(() => {
    render(
      <Router>
        <SignupPage />
      </Router>
    );
  });
  describe('Rendering', () => {
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

  describe('Behavior', () => {
    test('Handles Signup', () => {});
    test('Handles Navigate Login', () => {});
  });
});
