import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import bcrypt from "bcryptjs"
import { sign } from 'hono/jwt'
import { getCookie,setCookie,deleteCookie } from 'hono/cookie'


export const Signin =async (c:any) =>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const {email,name,password} =await c.req.json();
 
    try {
        const Userexist = await prisma.user.findUnique({
            where :{
                email:email
            }
        })
        
        if(Userexist){
            return c.status(400).json({
                message:"User already exist"
            })
        }
        const HashedPassword = await bcrypt.hash(password,10);
        
        const user  =await prisma.user.create({
            data:{
                email:email,
                name:name,
                password:HashedPassword
            }
        })
       
      
        c.set('userid',user.id);
         setCookie(c,'userid',user.id);
        const payload = {
            sub: email
          }
       
          const token = await sign(payload, c.env.SECRET)

        
        // console.log(token);   setCookie(c,'token',token);
        setCookie(c,'token', token);
          
        return c.json({
            message: 'Sigin suessfully',
            token 
        })

    } catch(error) {
        
  return c.status(500).json({
    message: error
  });
    }
}
export const login = async(c:any) =>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const {email,password} =await c.req.json();

         
        const userexits = await prisma.user.findUnique({
            where:{
                email
            }
        })

       

        if(!userexits){
            return c.status(400).json({
                message:"user not exist"
            })
        }
       
       
        const verifyPassword = await bcrypt.compare(password,userexits.password);
       
        if(verifyPassword){
            return c.status(400).json({
                message:"wrong password"
            })
        }

        const payload = {
            sub: email
          }
       
          const token = await sign(payload, c.env.SECRET)
          c.set('userid',userexits.id);
         setCookie(c,'userid',userexits.id);
         setCookie(c, 'jwt', token, {
            httpOnly: true,
            secure: false, 
            maxAge: 60 * 60 * 24 * 7,
            sameSite: 'lax', 
            path: '/',
            domain: 'localhost' 
          })
        //  console.log(token);
       
        return c.json({
            message: 'login suessfully',
            token 
        })

    } catch (error) {
        return c.json({
            message: error
          });
    }
}

export const logout = (c:any) =>{
    try {
        
        deleteCookie(c,'token');
        deleteCookie(c,'userid');

        return c.json({ message: 'logout suessfully' })
    } catch (error) {
        console.log(error);
        return c.status(400).json({
            message:error
        })
    }
}