
import {rest} from 'msw';

export const handlers = [
  rest.get('http://localhost:5050/install', (req, res, ctx) => {
    return res(ctx.json([{
      status: 200,
      message: 'End'
    }]))
  }),

  rest.get('http://localhost:5050/portforward', (req, res, ctx) => {
    return res(ctx.json([{
      status: 200,
      message: 'Port-Forward Successful'
    }]))
  })
];