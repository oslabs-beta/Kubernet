import { setupServer } from 'msw/node';
import routeHandlers from './handlers';

export const server = setupServer(routeHandlers);
