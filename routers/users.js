const express=require('express');
const router=express.Router();
const User=require('../model/user.js')
router.get('/',async(req,res)=>{
    try{
        const user=await User.find();
        res.status(200).json(user);
    }
    catch(err){
        res.send('ERROR');
    }
    
})
router.get('/:id',async(req,res)=>{
    try{
        const user=await User.findById(req.params.id);
        res.status(200).json(user);
    }
    catch(err){
        res.send('ERROR');
    }
    
})
router.post('/',async (req,res)=>{
    const user=new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    try{
        const u1=await user.save()
        res.status(200).json(u1)
    }
    catch(err){
        res.send('error');
    }
})
router.patch('/:id',async (req,res)=>{
    try{
        const user=await User.findById(req.params.id)
        user.email=req.body.email;
        const u1=await user.save();
        res.json(u1);
    }
    catch(err){
        res.send('ERROR');
    }
})
router.delete('/:id',async (req,res)=>{
    try{
        const user=await User.findById(req.params.id)
        user.email=req.body.email;
        const u1=await user.deleteOne();
        res.json(u1);
    }
    catch(err){
        res.send('ERROR');
    }
})
module.exports=router