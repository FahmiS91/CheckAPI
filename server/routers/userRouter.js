const express=require('express')
const router=express.Router()
const User=require('../models/userSchema')
// get users 
router.get('/getusers',(req,res)=>{
    
     User.find((error,data)=>{
         error ? res.send(error.message):res.json(data)
     })
 })

// register user 
router.post('/register',(req,res)=>{
   const user =new User(req.body)
    user.save((error,data)=>{
        error ? res.send(error.message):res.json(data)
    })
})

//delete user 
router.delete('/deleteuser/:id',(req,res)=>{
   User.findByIdAndDelete(req.params.id,(error,data)=>{
       error ? res.send(error.message):res.json(data)
   })
})

//update user 
router.put('/updateuser/:id',(req,res)=>{
    User.findOneAndUpdate(req.params.id,req.body,(error,data)=>{
        error ? res.send(error.message):res.json(data)
    })
})

module.exports=router