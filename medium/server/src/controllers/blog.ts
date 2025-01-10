import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Context } from 'hono';
import { getCookie } from 'hono/cookie';





export const getBlog = async(c: Context) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())

   try {
      const res = await prisma.post.findMany({
        select:{
          content:true,
          title:true,
          id:true,
          author:{
             select:{
              name:true
             }
          }
        }
      });

      return c.json({
        data:res
      })
   } catch (error) {
          console.log(error);
          return c.json({
            message:error
          })
   }
};

export const getBlogbyID = async(c: Context) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())

const id = c.req.param('id');

  try {
     const res = await prisma.post.findMany({
      where:{
        id:id
      }
     })
 
     return c.json({
      message:res
     })
  } catch (error) {
    console.log(error);
    return c.json({
      message:error
    })
  }
 
};

export const createBlog = async(c: Context) => {
 
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())

  const userid = getCookie(c,'userid');
  const message = c.get('userid');
    
  console.log(message);
   console.log(userid);
 
   try {
     const body = await c.req.json();

      console.log(body)
     const res = await prisma.post.create({
      data:{
        title: body.title,
			  content: body.content,
		  	authorId: "be0dd1f6-1bdf-4804-896c-54c979947416"
      }
     })

     return c.json({
      id: res
     })
   } catch (error) {
    console.log(error);
    return c.json({
      message:error
    })
   }
  
};

export const updateBlog = async(c: Context) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())

  const id = c.req.param('id');
  try {
    const body = await c.req.json();

    
    const res = await prisma.post.update({
      where: {
       id: id,
      },
      data: {
        title: body.title,
			  content: body.content,
      },
    })

    return c.json({
     message:"updated sucessfully",
     res
    })
  } catch (error) {
   console.log(error);
   return c.json({
     message:error
   })
  }
};

export const deleteBlog = async(c: Context) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())
 
  const id = c.req.param('id');

  try {
    const res = await prisma.post.delete({
      where:{
        id
      }
    })

   
    return c.json({
      message:"deleted successfully"
    })
  } catch (error) {
    console.log(error);
    return c.json({
      message:error
    })
  } 
};
