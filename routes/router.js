const express=require('express')
const router =express.Router()
router.route("/").get((req,res)=>{
    res.send("home page")
})
router.route("/register").post((req,res)=>{
    const {user,email,password}=req.body
    console.log(user,email,password)
    res.send({'status':1,"msg":"register successfully"})
})
module.exports=router