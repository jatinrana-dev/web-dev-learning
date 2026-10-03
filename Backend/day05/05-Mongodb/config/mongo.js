const {default: mongoose } = require("mongoose");

const connectDb = async () => {
   try {
    
    await mongoose.connect("mongodb+srv://jatinranacode_db_user:wPCCC592WvgeNGuG@mycluster.rsilfbc.mongodb.net/");
   console.log("mongodb is conncted")
   } catch (error) {
    console.log("error while connecting",error)
    
   }

}
module.exports = connectDb