const express=require('express')
require('dotenv').config({ path: './config.env' })
// connect database 
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false)
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true, useUnifiedTopology: true})
 .then(()=>console.log('connected to data base')).catch((error)=>console.log(error.message))

const app=express()
app.use(express.json())

const PORT=process.env.PORT || 4000
app.listen(PORT,(err)=>err? console.log(err) :console.log("server runing on port ",PORT))

app.use('/user',require('./routers/userRouter'))

