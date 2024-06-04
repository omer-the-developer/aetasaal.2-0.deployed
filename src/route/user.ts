import Router from 'koa-router';

import ctrl from '../controller/auth';
import * as userCtrl from '../controller/user';
import authentication from '../middleware/authentication';
import authorization from '../middleware/authorization';
import { Role } from '../enum/role';

const router = new Router({
  prefix: `/api/user`,
});
//@ts-ignore
router.use(authentication);

//@ts-ignore
router.get('/', authorization(false, [Role.SUPER_ADMIN ]), userCtrl.getAll);
// router.get('/', authorization(), userCtrl.getAll);

router.get('/me', userCtrl.getUser);

// router.get('/:userId', authorization(), userCtrl.getUserById);
//@ts-ignore
router.get('/:userId', authorization(false, [Role.SUPER_ADMIN ]), userCtrl.getUserById);

router.get('/department/:departmentId',
// authorization(), userCtrl.getUserByDepartmentId);
//@ts-ignore
authorization(false, [Role.SUPER_ADMIN , Role.USER ]), userCtrl.getUserByDepartmentId);

// router.post('/', authorization(), userCtrl.saveUser);
//@ts-ignore
router.post('/', authorization(false, [Role.SUPER_ADMIN ]), userCtrl.saveUser);

router.put('/change-password', ctrl.changePassword);

// router.delete('/:userId/delete', authorization(), userCtrl.deleteUser);
//@ts-ignore
router.delete('/:userId/delete', authorization(false, [Role.SUPER_ADMIN ]), userCtrl.deleteUser);

export default router.routes();


