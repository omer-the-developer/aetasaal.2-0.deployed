import Router from 'koa-router';

import ctrl from '../controller/user-location-trail';
import authentication from '../middleware/authentication';
import authorization from '../middleware/authorization';
import { Role } from '../enum/role';

const router = new Router({
  prefix: `/api/user-location-trail`,
});
//@ts-ignore
router.use(authentication);

// router.get('/', authorization(), ctrl.getAll);
//@ts-ignore
router.get('/', authorization(false, [Role.SUPER_ADMIN  ]), ctrl.getAll);

router.post('/', ctrl.saveUserLocationTrail);

export default router.routes();
