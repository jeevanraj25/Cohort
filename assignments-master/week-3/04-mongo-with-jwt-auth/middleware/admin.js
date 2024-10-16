const jwt =require("jsonwebtoken");


const jwtpassword= "kbdkjjbjkavdkbjv"
// Middleware for handling auth
    async function  adminMiddleware (req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    // console.log(req.cookies);
    const token =req.cookies.token;
    

    const check = await jwt.verify(token,jwtpassword);

    if(!check){
        return res.status(402).json({
            message:"user is not validated"
        })
    }

    next();
}

module.exports = adminMiddleware;