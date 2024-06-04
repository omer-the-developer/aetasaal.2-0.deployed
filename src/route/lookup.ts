import Router from 'koa-router';

//@ts-ignore
import ctrl from '../controller/lookup';
import authentication from '../middleware/authentication';
import authorization from '../middleware/authorization';
import { Role } from '../enum/role';

const router = new Router({
  prefix: `/api/lookup`,
});
//@ts-ignore
router.use(authentication);

router.get('/', ctrl.getAll);

router.get('/:lookupId/data', ctrl.findByLookupId);

router.get('/lookup-data/:lookupDataId', ctrl.findLookupDataById);

// router.post('/', authorization(), ctrl.saveLookup);
//@ts-ignore
router.post('/', authorization(false, [Role.SUPER_ADMIN  ]), ctrl.saveLookup);

// router.post('/:lookupId/data', authorization(), ctrl.saveLookupData);
//@ts-ignore
router.post('/:lookupId/data', authorization(false, [Role.SUPER_ADMIN  ]), ctrl.saveLookupData);

// router.delete('/:id', authorization(), ctrl.deleteLookup);
//@ts-ignore
router.delete('/:id', authorization(false, [Role.SUPER_ADMIN  ]), ctrl.deleteLookup);

// router.delete('/:lookupId/data/:id', authorization(), ctrl.deleteLookupData);
//@ts-ignore
router.delete('/:lookupId/data/:id', authorization(false, [Role.SUPER_ADMIN  ]), ctrl.deleteLookupData);

export default router.routes();
