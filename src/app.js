const express=require("express")

const authRouter=require("./routes/auth.routes")

//Instance of server created
const app=express()

app.use("/api/auth",authRouter) //all the reqstarting from /api/auth will be handled by authRouter





module.exports=app;