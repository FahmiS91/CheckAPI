const mongoose=require('mongoose')
const Schema=mongoose.Schema
const userSchema=new Schema({
    name:{
        type:String,
        required:[true,'you have to add your name !!']
    },
    lname:{
        type:String,
        required:[true,'you have to add your lname !!']
    },
    age:{
        type:Number,
        required:[true,'you have to add your age !!']

    },
    email:{
        type:String,
        required:[true,'you have to add your email !!'],
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'invalid email']
    },
    password:{
        type:String,
        required:[true,'you have to add your password']
    }

})

module.exports=mongoose.model('person',userSchema)