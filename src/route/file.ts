import Router from 'koa-router';

import authentication from '../middleware/authentication';
import ctrl from '../controller/file';

const router = new Router({
  prefix: `/api/file`,
});
//@ts-ignore
router.use(authentication);

router.post('/picture', ctrl.saveProfilePicture);

router.post('/execution', ctrl.saveExecutionFile);

export default router.routes();
