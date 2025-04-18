import { Hono } from 'hono'
import userRouter from './routes/user.route'
import blogRouter from './routes/blog.route'
import { cors } from 'hono/cors'


const app = new Hono<{
	Bindings: {
		DATABASE_URL: string,
		SECRET:string
	}
}>();

app.use(
	'*',
	cors({
	  origin: 'http://localhost:5173',
	  credentials: true 
	})
  );
app.route('/api/v1/user',userRouter)
app.route('/api/v1/blog',blogRouter);



export default app
