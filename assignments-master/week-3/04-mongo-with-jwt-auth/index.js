const express = require("express");
const bodyParser = require("body-parser");

const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");    
const cookieParser = require('cookie-parser');

// Use this middleware before your routes




const app = express();

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/admin", adminRouter)
app.use("/user", userRouter)

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
