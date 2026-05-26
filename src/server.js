require("dotenv").config()
const { connection } = require("mongoose")
const app= require("./app")
const connectToDB=require("./config/db")



connectToDB() //run the connect to DB function
//server start
app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})