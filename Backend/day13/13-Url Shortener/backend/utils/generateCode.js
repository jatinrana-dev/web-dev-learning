const crypto = require('crypto');
// we can generate a random string using crypto module in nodejs

const generateCode = () => {
    const mainString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let shortCode = ""
    for (let i = 0; i < 6; i++) {
        shortCode += mainString.charAt(Math.floor(Math.random()*62));
}

return shortCode;
}

module.exports = generateCode;