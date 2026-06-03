const mongoose=require("mongoose")

const accountSchema= new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:[ true,"Account must be associated with a user" ]
    },
    status:{
        enum:{
            type:String,
            values:["ACTIVE","FROZEN","CLOSED"],
            message:"Status can be either ACTIVE,FROZEN or CLOSED"
        }
    },
    currency:{
        type:String,
        required:[ true,"Currency is required for creating an account" ],
        default: "INR"
    }
},
    //balance never stored directly in database for it only we use ledger.
    {
            timestamps:true
    }
)


const accountModel=mongoose.model("account",accountSchema)

module.exports=accountModel