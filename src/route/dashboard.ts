import Router from 'koa-router';
//@ts-ignore
import ctrl from '../controller/dashboard';
import authentication from '../middleware/authentication';
import authorization from '../middleware/authorization';
import { Role } from '../enum/role';

const router = new Router({
  prefix: `/api/dashboard`,
});

//@ts-ignore
router.use(authentication); 
// router.use(authorization()); 
//@ts-ignore
router.use(authorization(false, [Role.SUPER_ADMIN])); 

router.get('/admin/statistics', ctrl.getAdminDashboardStatistics);


export default router.routes();
