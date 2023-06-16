import { rest } from 'msw';

export const handlers = [
  rest.post('/signup', (req, res, ctx) => {
    return res(ctx.status(201).json({ fullDashboard: 'dashboardURL' }))
  })
]