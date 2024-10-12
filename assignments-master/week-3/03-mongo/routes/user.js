const express = require("express"); 
const bodyParser = require("body-parser");
const userMiddleware = require("../middleware/user.js");
const { User } = require("../db/index.js");
const router = express.Router();
// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const pass =req.body.password;

    const checkuser = await User.findOne({username});
    if(checkuser){
        return res.status(401).json({
            message:"user is already exist"
        })
    }

    const newUser =User.create({
        username,
        pass
    }) 
      
    newUser.save();
    return res.status(201).json({
        message:"user created successfully"
    })

});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic

    const res = await Course.find({});

    return res.status(200).json({
        courses: res
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

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
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

module.exports = router;