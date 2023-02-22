const express=require("express")
// const {connection}= require("mongoose")
const {connection}=require("./configs/db")
// const {UserModel}=require("./models/User.model")
// const jwt=require("jsonwebtoken")
// const bcrypt = require('bcrypt');
const {userRouter}=require("./routes/User.route")
const {noteRouter}=require("./routes/Note.route")
const {authenticate}=require("./middlewares/authenticate.middleware")
require("dotenv").config()

const cors=require("cors")

const app=express()
app.use(cors({
    origin:"*"
}))
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("HOME PAGE")
})

app.use("/users",userRouter)
app.use(authenticate)
app.use("/notes",noteRouter)


// app.get("/data", (req,res)=>{
//     // const token=req.query.token;
//     const token=req.headers.authorization
//     jwt.verify(token, 'masai', (err, decoded)=>{
//         if(err){
//             res.send("Invalid token")
//             console.log(err)
//         } else {
//             console.log("Data...")
//         }
//     });
//     // const token=req.query.token
//     // if(token==="abc123"){
//     //     res.send("Data...")
//     // } else {
//     //     res.send("Login first")
//     // }
//     // res.send("DATA...")
// })

// app.get("/cart", (req,res)=>{
//     const token=req.query.token;
//     jwt.verify(token, 'masai', (err, decoded)=>{
//         if(err){
//             res.send("Invalid token")
//             console.log(err)
//         } else {
//             console.log("cart page")
//         }
//     });
// })

// app.get("/contact", (req,res)=>{
//     res.send("Contacts Page")
// })

app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("Connected to the DB")
    }catch(err){
        console.log("Trouble connecting to the DB")
        console.log(err)
    }
    console.log(`running at port ${process.env.port}`)
})



// {
//     "title":"FE",
//     "note":"Today it is the Full stack FE PSC",
//     "category":"Live Session",
//     "author":"Chunnu"
//   }

// {
//     "title":"Chulbul nem note 1",
//     "note":"This is the first note",
//     "category":"live lecture"
// }

// 63c563c0cdf9e86d7df6f4d1