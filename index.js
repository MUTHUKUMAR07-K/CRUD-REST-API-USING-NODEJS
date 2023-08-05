const express=require('express')
const mongoose=require('mongoose')
const userRoutes=require('./routers/users.js');
const app=express()

require('dotenv').config();
mongoose.connect(process.env.url)
const db=mongoose.connection
db.on('error',(error)=>{
    console.log('Error');
})

db.once('connected',(connected)=>{
    console.log('Connected');
})
app.use(express.json())

app.use('/users',userRoutes);
// app.use(bodyparser.json());
// app.get('/',(req,res)=>{
//     res.send('Hello')
// })

app.listen(5000,()=>{
    console.log('Server listening on 5000.....');
})