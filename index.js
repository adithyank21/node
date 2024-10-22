const express =require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
const port=9000
//mongo db connection using mongoose
const mongoose = require('mongoose')
main().catch(err=>console.log(err))
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/citytravel_db')
    console.log("data base connected")
}
// const citySchema = new mongoose.Schema({
//     name:{type:String},
//     mobile:{type:String}

// },{timestamps:true})

// const cityModel = new mongoose.model("citytravel_tb",citySchema)

// cityModel.create({
//     name:"Sara",
//     mobile:"7560817580"
// })
//routing
const router =require('./routes/router')
app.use("/userouter",router)




app.listen(port,()=>{
    console.log("server running http://localhost:9000")
})