const express = require("express")
const userRoutes=require("./routes/User")
const postRoutes=require("./routes/post")

const app= express()
const mongoose = require("mongoose")
require("dotenv").config()

mongoose
.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("connected")
    })
})

app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

app.use("/api/users",userRoutes)
app.use("/api/post",postRoutes)