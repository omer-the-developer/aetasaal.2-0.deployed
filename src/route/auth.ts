import Router from 'koa-router';

//@ts-ignore
import ctrl from '../controller/auth';

const router = new Router({
  prefix: `/api/auth`,
});

router.post('/login', ctrl.login);

router.post('/sign-up', ctrl.signUp);

// router.post('/social-login', ctrl.socialLoginOrSignUp);

router.post('/forgot-password', ctrl.forgotPassword);

router.post('/verify-hash', ctrl.verifyHash);

router.post('/reset-password', ctrl.resetPassword);

export default router.routes();
