const jwt =require("jsonwebtoken");


const jwtpassword= "kbdkjjbjkavdkbjv"
async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token =req.cookies.token;
    

    const check = await jwt.verify(token,jwtpassword);

    if(!check){
        return res.status(402).json({
            message:"user is not validated"
        })
    }

    next();
}

module.exports = userMiddleware;