const { route } = require("../Routes/auth.routes.js");

const userModel = require("../Models/user.model.js");

const bcrypt = require("bcrypt");
const {generateToken ,  verifyAccessToken} = require("../Utils/auth.js");


const registerController = async (req, res) => {
    const { name, email, password } = req.body;
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
        return res.status(400).json({
            message: "User already exists",
            erros: "User already exists",
         });
    }

         const user = await userModel.create({
            name,
            email,
            passwordhash: await bcrypt.hash(password, 10),

            
         }
      );
        
         const { accessToken, refreshToken } = generateToken({ userId: user._id });
         res.cookie("accessToken", accessToken, {
            httpOnly: true,
         })
            res.status(200).json({
               message: "User registered successfully",
               data: {
                  user: {
                     name: user.name,
                     email: user.email,
                  },
                  accessToken,
                 
               },
            });

             
}

const getMeController = async (req, res) => {
   const accessToken = req.headers.authorization?.split(" ")[1];
   try {
      const decoded = verifyAccessToken(accessToken);
      const user = await userModel.findById(decoded.userId);
      res.status(200).json({
         message: "User fetched successfully",
         data: {
            user: {
               name: user.name,
               email: user.email,
            },
         },
      });   
      
   } catch (error) {
      res.status(401).json({ message: "Invalid access token or expired" });
      
   }
}

module.exports = { registerController, getMeController };
