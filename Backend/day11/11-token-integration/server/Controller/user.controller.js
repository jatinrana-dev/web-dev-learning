

const userModel = require("../Models/user.model.js");

const bcrypt = require("bcrypt");
const {generateToken ,  verifyAccessToken , verifyRefreshToken} = require("../Utils/auth.js");


const registerController = async (req, res) => {
   try {
      const { name, email, password } = req.body;
      const existingUser = await userModel.findOne({ email });
      if (existingUser) {
         return res.status(409).json({ message: "User already exists" });
      }

      const user = await userModel.create({
         name,
         email,
         passwordhash: await bcrypt.hash(password, 10),
      });

      const { accessToken, refreshToken } = generateToken({ userId: user._id });

      user.refreshToken = refreshToken;
      await user.save();

      res.cookie("refreshToken", refreshToken, {
         httpOnly: true,
         maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });

      return res.status(201).json({
         message: "User registered successfully",
         data: {
            user: { name: user.name, email: user.email },
            accessToken,
         },
      });
   } catch (error) {
      return res.status(500).json({ message: "Server error" });
   }
};
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
 const newAccessTokenController = async (req, res) => {
   const refreshToken = req.cookies.refreshToken;
   if (!refreshToken) {
      return res.status(401).json({ message: "Refresh token not found" });
   }
   try {
      const decoded = verifyRefreshToken(refreshToken);
      const user = await userModel.findById(decoded.userId);

      if (!user || refreshToken !== user.refreshToken) {
         if (user) {
            user.refreshToken = null;
            await user.save();
         }
         return res.status(401).json({ message: "Invalid refresh token" });
      }

      const { accessToken, refreshToken: newRefreshToken } = generateToken({ userId: user._id });

      user.refreshToken = newRefreshToken;
      await user.save();

      res.cookie("refreshToken", newRefreshToken, { httpOnly: true });
      res.status(200).json({
         message: "New access token generated successfully",
         accessToken,
      });
   } catch (error) {
      res.status(401).json({ message: "Invalid refresh token or expired" });
   }
};
   
   
module.exports = { registerController, getMeController, newAccessTokenController };
