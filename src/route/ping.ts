import Router from 'koa-router';
//@ts-ignore
import { ping, generatePassword } from '../controller/ping'; // Import named exports

const router = new Router({
  prefix: `/api`
});

// Define route handlers
//@ts-ignore
router.get('/ping', ping);

//@ts-ignore
router.get('/generate-password', generatePassword);

export default router.routes(); // Export the routes
