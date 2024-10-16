const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const jwt =require("jsonwebtoken");
const { Admin, Course } = require("../db");
const router = Router();

const jwtpassword= "kbdkjjbjkavdkbjv"

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic

    const username = req.body.username;
    const password =req.body.password;

    const user= await Admin.create({
        username,
        password
    })

     user.save();

     res.status(200).json({
         message: 'Admin created successfully'
     })


});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    
    const username = req.body.username;
    const password =req.body.password;


    const user = await Admin.findOne({username,password});

    if(!user){
        return res.status(401).json({
            message:"user not exits"
        })
    }

    const token = jwt.sign({username},jwtpassword,{
        expiresIn:"1d"
    })

    
   return res.cookie("token", token).json({
    token
   })
 
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price =req.body.price;
    const imageLink = req.body.imageLink;

    const newCourse = await Course.create({
        title,
        description,
        price,
        imageLink
    })

    res.status(200).json({
        message:"Course created sucessfully"
    })
   
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic

    const response =await Course.find({});

    res.status(200).json({
        response
    })
});

module.exports = router;