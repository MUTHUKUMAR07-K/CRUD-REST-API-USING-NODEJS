const mongoose =require('mongoose')

const usermodel=new mongoose.Schema({
    name:{
        requried: true,
        type:String
    },
    email:{
        requried:true,
        type: String,
        unique:true
    },
    password:{
        requried:true,
        type:String,
    }
})

module.exports=mongoose.model("User",usermodel);