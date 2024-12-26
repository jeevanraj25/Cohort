const express = require("express"); 
const bodyParser = require("body-parser");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");




const router = express.Router();
// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const admin = req.body;
    const password = req.body;

    const checkadmin = await Admin.findOne({admin});
    if(checkadmin){
        return res.status(401).json({
            message:"Admin already exist"
        });
    }
    
    const newadmin =await Admin.create({
        admin,
        password
    })

    res.status(201).json({
        msg:"admin created successfully",
        sucess:true
    })

});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price =req.body.price;
    const imageLink = req.body.imageLink;

    const newCourse = Course.create({
        title,
        description,
        price,
        imageLink
    })

    res.status(200).json({
        message:"Course created sucessfully"
    })
   
    
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic

    const response =Course.find({});

    res.status(200).json({
        response
    })
});

module.exports = router;