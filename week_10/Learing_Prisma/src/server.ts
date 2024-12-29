import expres from "express";
import { PrismaClient } from "@prisma/client";

const prisma =new PrismaClient();
const app = expres();
const PORT =300;



const addUser =async (email:string,name:string,password:string) =>{
    try {
        const res =await prisma.user.create({
            data:{
                email,
                name,
                password
            }
        })
        console.log(res);
    } catch (error) {
        
    }
}

//  addUser("roy@gmail.com","roy","123456")

type Updated = {
    name: string,
    password: string
}

const updatedUser = async (email: string, updated: Updated) => {
    try {
        const res = await prisma.user.update({
            where: {
                email
            },
            data: {
                ...updated  
            }
        })
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

// updatedUser("jake@gmail.com", {
//     name: "jake12",
//     password: "123456"
// });


const getall =async () =>{
    try {
        const res =await prisma.user.findMany({});
        console.log(res)
    } catch (error) {
        
    }
}

// getall();

app.listen(PORT,()=>{
    console.log(`server is runnning at ${PORT}`);
})


