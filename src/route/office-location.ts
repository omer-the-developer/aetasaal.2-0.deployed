import Router from 'koa-router';

//@ts-ignore
import ctrl from '../controller/office-location';
import authentication from '../middleware/authentication';
import authorization from '../middleware/authorization';
import { Role } from '../enum/role';

const router = new Router({
  prefix: `/api/office-location`,
});
//@ts-ignore
router.use(authentication);
// router.use(authorization());
//@ts-ignore
router.use(authorization(false, [Role.SUPER_ADMIN ]));

router.get('/', ctrl.getAll);

router.post('/', ctrl.saveOfficeLocation);

router.delete('/:id', ctrl.deleteOfficeLocation);

export default router.routes();
