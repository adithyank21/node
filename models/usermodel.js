

const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    // username:{type:String},
    // useremail:{type:String},
    // userpassword:{type:String}
    user:{type:String},
     email:{type:String},
    password:{type:String}

},{timestamps:true})


const userModel = new mongoose.model("user_tbl",userSchema)
module.exports = userModel