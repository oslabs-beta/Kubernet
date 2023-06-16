import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import {BrowserRouter as Router} from 'react-router-dom';
import LoginPage from "../client/src/pages/LoginPage";

describe(LoginPage, () => {

  beforeEach(() => {
    <Router>
      <LoginPage/>
    </Router>
  })

  screen.debug()

  test('Checks if username input field is on the page', () => {
    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
  })
})