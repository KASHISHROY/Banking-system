const express=require("express")
const cookieParser=require("cookie-parser")



//Instance of server created
const app=express()

app.use(express.json())  //to read the body of request
app.use(cookieParser())



//routes required
const authRouter=require("./routes/auth.routes")
const accountRouter=reuire("./routes/acoount.routes")



//use routes
app.use("/api/auth",authRouter) //all the reqstarting from /api/auth will be handled by authRouter
app.use("/api/accounts",accountRouter)





module.exports=app;