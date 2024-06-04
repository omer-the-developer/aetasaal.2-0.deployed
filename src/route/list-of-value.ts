import Router from 'koa-router';

import authentication from '../middleware/authentication';
//@ts-ignore
import ctrl from '../controller/list-of-value';

const router = new Router({
  prefix: `/api/list-of-value`
});
//@ts-ignore
router.use(authentication);

router.get('/', ctrl.findByKeys);

export default router.routes();
