import { Context } from 'koa';
import * as compose from 'koa-compose';
import { IResponse } from '../interface/response';

const handler = async (ctx: Context, next: () => void) => {
  if (ctx.state.data) {
    ctx.body = {} as IResponse;
    ctx.body = {
      meta: {
        status: ctx.status,
        message: ctx.state.message || 'success',
      },
      data: ctx.state.data,
    };
//@ts-ignore
    if (ctx.pagination && ctx.method === 'GET') {
//@ts-ignore
      ctx.body.meta.limit = ctx.pagination.limit;
//@ts-ignore
      ctx.body.meta.offset = ctx.pagination.offset;
//@ts-ignore
      ctx.body.meta.totalCount = ctx.pagination.totalCount;
    }
  } else if (ctx.path.startsWith('/api')) {
    ctx.status = 404;
    ctx.body = { error: 'API endpoint not found' };
  } else {
    await next();
  }
};

//@ts-ignore
export default () => compose([handler]);

