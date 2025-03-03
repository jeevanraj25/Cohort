const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { Admin, User, Course } = require("../db");

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    
    const username = req.body.username;
    const password =req.body.password;

    const user= await User.create({
        username:username,
        password
    })

     user.save();

     res.status(200).json({
         message: 'Admin created successfully'
     })
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password =req.body.password;


    const user = await User.findOne({username,password});

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

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({});

    return res.status(200).json({
        courses
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const username = req.headers.username;
    const courseId =req.params.courseId

    await User.updateOne({
        username
    }, {
        $push:{
            purchasedCourses:courseId
        }
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.headers.username
    });

    console.log(user.purchasedCourses);
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });

    res.json({
        courses: courses
    })

});

module.exports = router