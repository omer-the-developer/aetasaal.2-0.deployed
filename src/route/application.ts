import Router from 'koa-router';

//@ts-ignore
import ctrl from '../controller/application';
import authentication from '../middleware/authentication';
import authorization from '../middleware/authorization';
import { Role } from '../enum/role';

const router = new Router({
  prefix: `/api/application`,
});

//@ts-ignore
router.use(authentication);

router.get('/', ctrl.getCurrentLoggedInUserApplications);

router.get('/:applicationId', ctrl.getApplicationById);

router.put('/:applicationId/publish',
// authorization(), ctrl.publishApplication);
//@ts-ignore
authorization(false, [Role.SUPER_ADMIN, Role.APP_CREATOR , Role.USER ]), ctrl.publishApplication);

router.get('/:applicationId/section/:sectionId',
// authorization(), ctrl.getApplicationFormSectionById);
//@ts-ignore
authorization(false, [Role.SUPER_ADMIN, Role.APP_CREATOR , Role.USER ]), ctrl.getApplicationFormSectionById);

router.get('/:applicationId/field/:fieldId',
// authorization(), ctrl.getApplicationFormFieldById);
//@ts-ignore
authorization(false, [Role.SUPER_ADMIN, Role.APP_CREATOR , Role.USER ]), ctrl.getApplicationFormFieldById);

router.get('/:applicationId/form', ctrl.getApplicationForm);

router.get('/:applicationId/workflow',
// authorization(), ctrl.getApplicationWorkflow);
//@ts-ignore
authorization(false, [Role.SUPER_ADMIN, Role.APP_CREATOR , Role.USER]), ctrl.getApplicationWorkflow);

router.get('/:applicationId/field-permission',
// authorization(), ctrl.getApplicationWorkflowFieldPermission);
//@ts-ignore
authorization(false, [Role.SUPER_ADMIN, Role.APP_CREATOR , Role.USER]), ctrl.getApplicationWorkflowFieldPermission);

router.get('/:applicationId/form-field-titles', ctrl.getApplicationFieldTitles);

// router.post('/', authorization(), ctrl.saveApplication);
//@ts-ignore
router.post('/', authorization(false, [Role.SUPER_ADMIN, Role.APP_CREATOR , Role.USER]), ctrl.saveApplication);

router.post('/:applicationId/form',
// authorization(), ctrl.saveApplicationForm);
//@ts-ignore
authorization(false, [Role.SUPER_ADMIN, Role.APP_CREATOR , Role.USER]), ctrl.saveApplicationForm);

router.post('/:applicationId/workflow',
// authorization(), ctrl.saveApplicationWorkflow);
//@ts-ignore
authorization(false, [Role.SUPER_ADMIN, Role.APP_CREATOR , Role.USER]), ctrl.saveApplicationWorkflow);

router.post('/:applicationId/field-permission',
// authorization(), ctrl.saveApplicationWorkflowFieldPermission);
//@ts-ignore
authorization(false, [Role.SUPER_ADMIN, Role.APP_CREATOR , Role.USER]), ctrl.saveApplicationWorkflowFieldPermission);

router.delete('/:id', ctrl.deleteApplication);

export default router.routes();
