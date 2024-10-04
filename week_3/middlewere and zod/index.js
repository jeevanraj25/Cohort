import  express from 'express';
import { z } from "zod";
const app = express();

app.use(express.json());



app.post("/healthy", (req, res) => {
    const mySchema = z.array(z.number());
    const kidney = req.body.kidney;
    const response  = mySchema.safeParse(kidney);
    res.send(response);
})


app.post("/check", (req, res) => {
   
    const mySchema = z.object({
        "email" :z.string().email(),
        "password": z.string().min(8)
    })
   
    const response  = mySchema.safeParse(req.body);
    res.send(response);
})


app.listen(3000, () => console.log('Server running on port 3000'));