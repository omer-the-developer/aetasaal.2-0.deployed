import Router from 'koa-router';

//@ts-ignore
import ctrl from '../controller/department';
import authentication from '../middleware/authentication';
import authorization from '../middleware/authorization';
import { Role } from '../enum/role';

const router = new Router({
  prefix: `/api/department`,
});
//@ts-ignore
router.use(authentication);

router.get('/', ctrl.getAll);

router.post('/', ctrl.saveDepartment);

router.delete('/:id', ctrl.deleteDepartment);

export default router.routes();
