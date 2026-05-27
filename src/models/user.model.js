const mongoose=require("mongoose")
const bcrypt=require("bcryptjs")

//userschema with 3 properties.
const userSchema= new mongoose.Schema({
    email:{
        type:String,
        required:[true,"Email is required for creating a user"],
        trim:true,
        lowercase:true,
        match: [ /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid Email address" ],
        unique: [ true, "Email already exists." ]
    },
    name:{
        type:String,
        required:[true,"Name is required for creating an account"]
    },
    password:{
        type:String,
        required:[true,"Password is required for creating an account"],
        minlength:[6,"password should be containing more than 6 character"],
        select:false,   //any query to fetch the database password wont come in that query until and unless we specificaaly ask for it
    }
},
    {
        timestamps:true, //when user was created or updated last time that record
    }
)

//whenever you save datato the schema then this function runs->hashing done which is one way can convert plain text to hashed password but not vice versa
userSchema.pre("save",async function(next)
{
    if(!this,isModified("password"))
    {
        return next()
    }
    const hash=await bcrypt.hash(this.password,10)
    this.password=hash
    return next()

})


userSchema.method.compare

