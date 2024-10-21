const home =(req,res)=>{
    res.send('home page')

}
const register=(req,res)=>{
    const {user,email,password} = req.body
    console.log(user)
    res.send({'status':1, "msg":"register successfully"})

}
module.exports={
    home,register
}