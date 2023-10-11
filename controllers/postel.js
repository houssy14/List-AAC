const product = require("../models/product")

module.exports.getproducts= async (req,resp)=>{
const products= await product.find();
return(
    resp.status(200).json(products)
)}

module.exports.getproductsbyid= async (req,resp)=>{
    const {id}=req.params
    const products= await product.findById(id)
    return(
        resp.status(200).json(products)
    )}

module.exports.addproduct=(req,resp)=>{
    const{Name, Certifact, Number}=req.body
    const proadd= new product({
        Name, Certifact, Number
    })
    proadd.save()
    .then(()=>{return resp.status(200).json({msg:"product added"})})
    .catch((e)=>{return resp.status(404).json({msg:e.message})})
}

module.exports.editproduct=(req,resp)=>{
    const{Name, Certifact, Number}=req.body
    const {id}=req.params
    product.findByIdAndUpdate(id,{Name, Certifact, Number})
    .then(()=>{return resp.status(200).json({msg:"product updated"})})
    .catch((e)=>{return resp.status(404).json({msg:e.message})})
}
module.exports.deleteproduct=(req,resp)=>{
    const {id}=req.params
    product.findByIdAndDelete(id)
    .then(()=>{return resp.status(200).json({msg:"product deleted"})})
    .catch((e)=>{return resp.status(404).json({msg:e.message})})
}