import { PrismaClient } from "@prisma/client";

const prisma =new PrismaClient();

async function insertUser(username: string, password: string, Name:string) {
   try {
       const res = await prisma.user.create({
        data:{
            username,
            password,
            Name
        }
       })
       console.log(res);
   } catch (error) {
    
   }
}

//  insertUser("admin2", "123456", "jeevan")

async function createTodo(userId: number, title: string, Description: string) {
    const todo = await prisma.todo.create({
      data: {
        title,
        Description,
        userId
      },
    });
    console.log(todo);
  
  }
  
// createTodo(1, "go to gym", "go to gym and do 10 pushups")

async function getTodosAndUserDetails(userId: number, ) {
    const todos = await prisma.todo.findMany({
        where: {
            userId: userId,
        },
        select: {
            user: true,
            title: true,
            Description: true
        }
    });
    console.log(todos);
}

// getTodosAndUserDetails(1);