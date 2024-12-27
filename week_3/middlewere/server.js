import express from "express";


const app = express();
const port =3000;

// normal way of checking 
function check(age){
     return age >=14;
}


app.get("/ride", (req,res) =>{
        // console.log(req.query.age);
    if(check(req.query.age)){
        res.status(200).json({
            msg:"u can ride the roller coster",
        })
    }else{
        res.status(400).json({
            msg:"u can't ride the roller coster",
        })
    }

   
})


//using middlewere function

function checkmiddlewere (req,res,next) {
     
    let age = req.query.age;
    if(age >= 15){
        next();
    }else{
        res.status(412).status({
            msg:"u can't ride the roller coaster"
        })
    }
}



app.get("/roller",checkmiddlewere ,(req,res) =>{
     
    res.status(200).json({
        msg:"u can ride the roller coaster"
    })
})

app.listen(port, () =>{
    console.log(`server is running at ${port}`);
})




