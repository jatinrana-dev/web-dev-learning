const jwt = require('jsonwebtoken')

const generateTokens = (userId)=>{
    const accesToken= jwt.sign({id:userId},process.env.ACCES_TOKEN_SECRET,{expiresIn: "15m"})
        const refreshToken= jwt.sign({id:userId},process.env.REFRESH_TOKEN_SECRET,{expiresIn: "7d"})

        return { accesToken , refreshToken}


}

const verifyAcessToken = ()=>{

    const decoded = jwt.verify(token , process.env.ACCES_TOKEN_SECRET)
    return decoded
}
module.exports = {generateTokens,
    verifyAcessToken}