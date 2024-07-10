import { Context } from 'koa';
import * as config from '../config';
import * as encryption from '../utils/encryption';

// Controller method to handle the /ping route
export const ping = async (ctx: Context, next: () => void) => {
  //@ts-ignore
  ctx.log.warn('inside ping');
  ctx.state.data = `pong! hi api is working`;
  await next();
};

// Controller method to handle the /generate-password route
export const generatePassword = async (ctx: Context, next: () => void) => {
  if (config.default.env === 'local') {
    //@ts-ignore
    ctx.state.data = encryption.saltHashPassword(ctx.request.query.p as string);
  }
  await next();
};
