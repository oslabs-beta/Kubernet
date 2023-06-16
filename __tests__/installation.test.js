import React from 'react'
// import API mocking utilities from Mock Service Worker
import {rest} from 'msw'
import {setupServer} from 'msw/node'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'

// import react testing methods
import { render, fireEvent, screen, waitForElementToBeRemoved, renderHook, findAllByText, findByAltText} from "@testing-library/react"
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import Installation from '../client/src/pages/Installation';
import WineGlass from '../client/src/assets/WineGlass';
import { BrowserRouter as Router } from 'react-router-dom';



// What do I want to test?
// First of all i want to make sure the installation page renders a get started button, and an already have an account component

const server = setupServer(
  rest.get('http://localhost:5050/install', (req, res, ctx) => {
    return res(ctx.json({install: 'dependencies installed'}))
  }),

  rest.get('http://localhost:5050/portforward', (req, res, ctx) => {
    return res(ctx.json({portforward: 'portforward to port 3000'}))
  })
)

describe(Installation, () => {
  beforeEach(() => {
    render(
      <Router>
         <Installation/>
      </Router>
     
    )
  })

  describe('Rendering', () => {

    test('Installation page displays the Get Started Button', () => {
      const getStartedButton = screen.getByRole('button', {name: 'Get Started'});
      expect(getStartedButton).toBeInTheDocument();
    })

    test("Displays button 'already have an account?'", () => {
      const alreadyHaveAnAccountButton = screen.getByText('already have an account?')
      expect(alreadyHaveAnAccountButton).toBeInTheDocument();
    })
  })

  describe('User actions', () => {
    test('Removes get started button', async ()=> {
      const getStartedButton = screen.getByRole('button', { name: 'Get Started'});
      // await userEvent.click(getStartedButton);
     
      act( () => {
        // /* fire events that update state */
        userEvent.click(getStartedButton);
        waitForElementToBeRemoved(getStartedButton)
        expect(findByAltText('loading...')).toBeInTheDocument()

        
      });
      
    
    })
    // test('Displays loading wine glass', async () => {
    //   //const getStartedButton = screen.getByRole('button', { name: 'Get Started'});
    //   act(async () => {
    //     /* fire events that update state */
    //     //await userEvent.click(getStartedButton);
    //     //await waitForElementToBeRemoved(getStartedButton).then(expect(getStartedButton).not.toBeInTheDocument())
        
    //     await expect(findByAltText('loading...')).toBeInTheDocument();
  
    //   });

     
    // })

  
   
  })
  

})

