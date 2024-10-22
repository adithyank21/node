const userModel =require("../models/usermodel")


const home =(req,res)=>{
    res.send('home page')

}
const register=(req,res)=>{
    const {user,email,password} = req.body
//data base code
userModel.create({
    // username:user,
    // useremail:email,
    // userpassword:password
    user,email,password
})


    console.log(user)
    res.send({'status':1, "msg":"register successfully"})

}
module.exports={
    home,register
}