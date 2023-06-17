import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import {BrowserRouter as Router} from 'react-router-dom';
import LoginPage from "../client/src/pages/LoginPage";

describe(LoginPage, () => {

  beforeEach(() => {
    render (
      <Router>
        <LoginPage/>
      </Router>
    )
    
  });

  describe('Rendering', () => {
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
    test('User types in login details',async () => {
      const userNameInput = screen.getByPlaceholderText('Username');
      const passwordInput = screen.getByPlaceholderText('Password');
   
      await userEvent.type(userNameInput, 'james');
      await userEvent.type(passwordInput, 'james123');
   
      expect(userNameInput.value).toBe('james');
      expect(passwordInput.value).toBe('james123');
    })
 
  })
  


})