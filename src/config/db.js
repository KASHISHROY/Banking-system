const mongoose=require('mongoose')

function connectToDB(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("server is connected to db")
    })
    .catch(err=>{
        console.error("Error connecting to db:", err.message)
        process.exit(1) //sever not connceted to db then close the server as it just wastes the resources if not connected to db is of no use
    })
}


module.exports=connectToDB;
