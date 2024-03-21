const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Full Name Must Required!!!"]
    },
    username:{
        type:String,
        required:[true,"User Name Must Required!!!"],
        unique:true
    },
    email:{
        type:String,
        required:[true,"Email Must Required!!!"]
    },
    phone:{
        type:String,
        required:[true,"Phone Must Required!!!"]
    },
    password:{
        type:String,
        required:[true,"Password Must Required!!!"]
    },
    pin:{
        type:String,
        default:""
    },
    city:{
        type:String,
        default:""
    },
    state:{
        type:String,
        default:""
    },
    pic:{
        type:String,
        default:""
    },
    role:{
        type:String,
        default:"User"
    },
    status:{
        type:String,
        default:"Active"
    },
    otp:{
        type:Number,
        default:-11551
    }
})
const User = new mongoose.model("User",UserSchema)
module.exports = User