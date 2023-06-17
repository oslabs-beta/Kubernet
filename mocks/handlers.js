import { rest } from 'msw';

export const routeHandlers = [
  rest.post('http://localhost:5050/signup', (req, res, ctx) =>
    res(ctx.status(201), json({}))
  ),
];
