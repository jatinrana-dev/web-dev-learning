const jwt = require('jsonwebtoken')

const generateTokens = (userId)=>{
    const accesTOken= jwt.sign({id:userId},process.env.ACCES_TOKEN_SECRET,{expiresIn: "15m"})
        const refreshTOken= jwt.sign({id:userId},process.env.REFRESH_TOKEN_SECRET,{expiresIn: "7d"})

}