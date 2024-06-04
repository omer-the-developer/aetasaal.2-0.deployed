import { Context } from 'koa';
import * as config from '../config';
import * as encryption from '../utils/encryption';

export const ping = async (ctx: Context, next: () => void) => {
  //@ts-ignore
  ctx.log.warn('inside ping');
  ctx.state.data = `pong! hi api is working`;
  await next();
};

export const generatePassword = async (ctx: Context, next: () => void) => {
  if (config.default.env === 'local') {
    //@ts-ignore
    ctx.state.data = encryption.saltHashPassword(ctx.request.query.p);
  }
  await next();
};
