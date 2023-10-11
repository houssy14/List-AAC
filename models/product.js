const mongoose=require("mongoose")
const productschema= new mongoose.Schema({
    Name:{type:String, required:true, unique:true},
    Certifact:{type:String, required:true},
    Number:{type:Number, default:10},
    Price:{type:Number, default:10}
})

module.exports=mongoose.model("product", productschema)
