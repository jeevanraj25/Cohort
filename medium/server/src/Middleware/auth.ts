import { Hono } from "hono"
import { getCookie } from "hono/cookie";
import { verify } from 'hono/jwt'


const app =new Hono();
export const authMiddleware = async (c:any, next:any) => {
    try {
        const token = getCookie(c, 'token');
        console.log(token);
        if (!token) {
            return c.json({ message: "Authentication token is missing" }, 401);
        }

        const decoded = await verify(token, c.env.SECRET);
        if (!decoded) {
            return c.json({ message: "Invalid token" }, 401);
        }

        c.req.user = decoded;
    //    console.log(decoded)
        await next();
    } catch (error) {
        return c.json({ message: "Authentication error", error: error }, 500);
    }
};
