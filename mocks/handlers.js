import { rest } from 'msw';

export const handlers = [
  rest.post('http://localhost:5050/signup', (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        username: 'james',
        password: 'james123',
      })
    );
  }),
];
