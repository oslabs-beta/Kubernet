import React from 'react'
import '@testing-library/jest-dom'
import { render, screen} from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import { server } from '../mocks/server';
import Installation from '../client/src/pages/Installation';


beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe(Installation, () => {
  describe('Rendering', () => {
    beforeEach(() => {
      render(
        <Router>
           <Installation/>
        </Router>
       
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
});

