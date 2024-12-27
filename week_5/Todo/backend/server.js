import express from "express";
import {createTodo,updateTodo} from "./types.js";
import Todo from "./db.js";
import cors from "cors"





const app = express();
app.use(express.json());
app.use(cors());

app.post("/todo", async (req,res) =>{
  
     const createPayload = req.body;
     const parsePayload = createTodo.safeParse(createPayload);

     if(!parsePayload.success){
        return res.status(404).json({
            message:"you have sent wrong inputs",
            success:false
        })
     }
     
     console.log(req.body);

     await Todo.create({
        title :createPayload.title,
        description:createPayload.description
     })
      
   
     return res.status(200).json({
        message:"todo is created",
        success:true
     })
})

app.get("/todos", async(req,res) =>{
     
    const response = await Todo.find({});

    return res.status(200).json({
        response,
        success:true
    })
})


app.put("/todo/completed", async (req,res) =>{

    const updatepalyload = req.body;
    const parsePayload =updateTodo.safeParse(updatepalyload);

        if(!parsePayload.success){
        return res.status(404).json({
            message:"you have sent wrong inputs",
            success:false
        })
     }
   
    //   console.log(req.body.id);

     await Todo.updateOne({
        _id:req.body.id
      },{
         
         completed:true   
        }
     )
 
     return res.status(200).json({
        message:"updated succeessfully",
        success:true
     })

})



app.listen(3000, () =>{
    console.log("server is running at 3000");
})