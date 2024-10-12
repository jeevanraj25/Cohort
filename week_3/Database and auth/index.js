import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
const jwtPassword = "123456";
import dotenv from "dotenv";

dotenv.config();


const app = express();
app.use(express.json());


mongoose.connect(
    process.env.MONGODB_URL
)
 console.log("mongodb connected")
const User = mongoose.model("User",{
    username: String,
    password: String,
    name: String
})

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

async function userExists(username, password) {
  // write logic to return true or false if this user exists
   
  // in ALL_USERS array
  const data = await User.find({username, password});
  console.log(data);
  // const user  =data.find((user) =>user.username === username && user.password === password);

  return data;
}

app.post("/signin", function (req, res) {
   
  const username = req.body.username;
  const password = req.body.password;
   
  console.log(username, password);
  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", async (req, res) => {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username
    const userdata = await User.find({username: { $ne: username } });
    // const data =userdata.filter((user) => user.username !== username);
    // console.log(data);
        return res.json(userdata);
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000)

