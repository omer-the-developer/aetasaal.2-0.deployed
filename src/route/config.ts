import Router from 'koa-router';

import ctrl from '../controller/config';

const router = new Router({
  prefix: `/api/config`,
});

router.get('/', ctrl.getConfig);

export default router.routes();
