import Router from 'koa-router';
//@ts-ignore
import ctrl from '../controller/ping';

const router = new Router({
  prefix: `/api`
});

router.get('/ping', ctrl.ping);

router.get('/generate-password', ctrl.generatePassword);

export default router.routes();
