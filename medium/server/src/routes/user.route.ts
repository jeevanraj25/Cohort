import { Hono } from 'hono';

import { login, logout, Signin} from '../controllers/user';

const userRouter = new Hono();

userRouter.post('/signin',Signin);
userRouter.post('/login',login)
userRouter.get('/logout',logout);


export default userRouter;