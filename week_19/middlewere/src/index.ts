import  express  from "express";

const app =express();

let result=0;
app.use(function(req,res,next){
     result++;
     next();
}) 

app.get("/",(req,res)=>{
    
})


app.listen(3000);