import express from 'express';

const app = express();
const port = 3000;
app.use(express.json());
const users =[{
    name:"john",
    kidney:[
        {
            healthy:true
        },
        {
            healthy:false
        },
    ]
}]

app.get("/",(req,res) =>{
     
    const human =users[0].kidney;
    const len =human.length;
    console.log(len);
    // console.log(human);
    // res.send(`we have two ${len}`);
    let cnt=0;
     const healthy= human.filter((i) => {i.healthy=== true ?cnt++ :cnt });
      console.log(cnt);
     res.send(`healthy kidney ${cnt}`);
})


app.post("/", (req,res) => {
    
     const ans=req.body.healthy;
     console.log(ans);
     if (ans !== undefined) {
        users[0].kidney.push({ healthy: ans });
    }

     
     res.json({
        users
     })
})

app.delete("/", (req,res) =>{
     
    users[0].kidney.pop();

    res.json({
        users
    })
})

app.listen(port, () => {
    console.log(`${port} is running`);
});
