import Router from 'koa-router';

//@ts-ignore
import ctrl from '../controller/role';
import authentication from '../middleware/authentication';
import authorization from '../middleware/authorization';
import { Role } from '../enum/role';

const router = new Router({
  prefix: `/api/role`,
});
//@ts-ignore
router.use(authentication);
//@ts-ignore
router.use(authorization(false, [Role.SUPER_ADMIN])); // Only super admin can access this module

router.get('/', ctrl.getAll);

// router.post('/', authorization(), ctrl.saveRole);
//@ts-ignore
router.post('/', authorization(false, [Role.SUPER_ADMIN  ]), ctrl.saveRole);

// router.delete('/:id', authorization(), ctrl.deleteRole);
//@ts-ignore
router.delete('/:id', authorization(false, [Role.SUPER_ADMIN  ]), ctrl.deleteRole);

export default router.routes();
