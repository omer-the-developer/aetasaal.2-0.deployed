import Router from 'koa-router';

//@ts-ignore
import ctrl from '../controller/group';
import authentication from '../middleware/authentication';
import authorization from '../middleware/authorization';
import { Role } from '../enum/role';

const router = new Router({
  prefix: `/api/group`,
});
//@ts-ignore
router.use(authentication);

// router.get('/', authorization(), ctrl.getAll);
//@ts-ignore
router.get('/', authorization(false, [Role.SUPER_ADMIN , Role.APP_CREATOR]), ctrl.getAll);

// router.post('/', authorization(), ctrl.saveGroup);
//@ts-ignore
router.post('/', authorization(false, [Role.SUPER_ADMIN  ]), ctrl.saveGroup);

// router.delete('/:id', authorization(), ctrl.deleteGroup);
//@ts-ignore
router.delete('/:id', authorization(false, [Role.SUPER_ADMIN  ]), ctrl.deleteGroup);

export default router.routes();
