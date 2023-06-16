import { handlers } from "./installationHandler";
import {setupServer} from 'msw/node';
export const server = setupServer(...handlers);