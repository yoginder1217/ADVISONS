const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name Must Required!!!"]
    },
    maincategory:{
        type:String,
        required:[true,"Maincategory Must Required!!!"]
    },
    subcategory:{
        type:String,
        required:[true,"Subcategory Must Required!!!"]
    },
    baseprice:{
        type:Number,
        required:[true,"Base Price Must Required!!!"]
    },
    discount:{
        type:Number,
        default:0
    },
    finalprice:{
        type:Number
    },
    des:{
        type:String,
        default:"This is Sample Products"
    },
    pic:{
        type:String,
        default:""
    },
    status:{
        type:String,
        default:"Active"
    }
})
const Product = new mongoose.model("Product",ProductSchema)
module.exports = Product