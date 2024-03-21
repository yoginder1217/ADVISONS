const mongoose = require("mongoose")

const FrontendSchema = new mongoose.Schema({
    pic:{
        type:String,
        default:""
    },
    des:{
        type:String,
        default:""
    },
    status:{
        type:String,
        default:"Active"
    }
})
const Frontend = new mongoose.model("Frontend",FrontendSchema)
module.exports = Frontend