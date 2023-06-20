
import {rest} from 'msw';

export const handlers = [
  rest.get('http://localhost:5050/install', (req, res, ctx) => {
    return res(ctx.json([{
      username: 'james',
      password: 'james123'
    }]))
  }),

  rest.get('http://localhost:5050/portforward', (req, res, ctx) => {
    return res(ctx.json([{
      status: 200,
      message: 'Port-Forward Successful'
    }]))
  }),

  rest.post('http://localhost:5050/signup', (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        username: 'james',
        password: 'james123',
      })
    )
  }),

  rest.post('http://localhost:5050/login', (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        username: 'james',
        password: 'james123',
      })
    )
  })
];
