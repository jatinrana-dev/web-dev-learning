const express = require('express');
const userModel = require('../Models/user.model.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/env.js');
const { generateTokens,verifyAccessToken,verifyRefreshToken } = require('../Utils/auth.js');
const cookieParser = require('cookie-parser');

//Post /api/auth/register
const registerController = async (req, res) => {

    const { name, email, password } = req.body;

    const  isUserExist = await userModel.findOne({ email });    

    if (isUserExist) {
        return res.status(400).json({ 
            message: "User already exists",
            error:[
                {
                    field: "email",
                    message: "User with this email already exists"
                }
            ]
        
        });
    }
    const user = new userModel({
        name,
        email,
        passwordHash: bcrypt.hashSync(password, 13)
    });
    const { accessToken, refreshToken } = generateTokens({ userId: user._id }); //key value pair h ye domo id iska mtlb h ki userId ke andr user._id daldo (jo actually mongodb ki id h ) then 

    //const generateTokens = ({userId})=>{
    // const accessToken=jwt.sign({ id:userId},config.ACCESS_TOKEN_SECRET,{expiresIn:'15m'})
    // const refreshToken=jwt.sign({id:userId},config.REFRESH_TOKEN_SECRET,{expiresIn:'7d'});
    // return {accessToken,refreshToken}

    //then ye jo function humne utils folder m bnaya tha ye mongodb ki id token bnane m help hui kuki humne id:mai toh userId di aur userId ke andr mongodb wali id h isliyee..


    user.refreshToken = refreshToken;
    await user.save();
  
res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: true,
    
});
    await user.save();
    res.status(201).json({ 
        message: "User registered successfully",
        data: {
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            },
             },
             accessToken,

    });
}



 //Get /api/auth/me
 //FInd the user who is making the request and return the user info from the database
 const meController = async (req, res) => {

    const accessToken = req.headers.authorization?.split(' ')[ 1 ];
   try {
        const decoded = verifyAccessToken(accessToken);
            const user = await userModel.findById(decoded.id)
    res.status(200).json({
        message: "User info retrieved successfully",
        data: {
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        }
    });
       
 } catch (error) {
        return res.status(401).json({ 
            message: "Invalid or Expired access token"
         });
    }


}

//Post /api/auth/refresh
const refreshTokenController = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken){
        return res.status(401).json({ message: "Refresh token not found" });
}
try{
    const decoded = verifyRefreshToken(refreshToken);
    const user = await userModel.findById(decoded.id);
    if(user.refreshToken !== refreshToken){
        user.refreshToken = null;
        await user.save();
        return res.status(401).json({ message: "Unauthorized refresh token , mistach" });
    }
    const { accessToken, refreshToken: newRefreshToken } = generateTokens({ userId: user._id });   
user.refreshToken = newRefreshToken;
await user.save();
res.cookie('refreshToken', newRefreshToken, {
    httpOnly: true,
    secure: true,
    
});
res.status(200).json({
    message: "Access token refreshed successfully",
    accessToken
});

} catch(error){
    return res.status(401).json({ message: "Invalid or Expired refresh token" });
}


}
 module.exports = { registerController, meController, refreshTokenController};





