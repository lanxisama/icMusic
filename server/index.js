const express =require('express')
const cors = require('cors')
const app =  express()

app.use(express.json())
app.use(cors())

app.use('/uploads',express.static(__dirname+'/uploads'))
require('./plugins/db')(app)
 
require('./routes/dispatchMatch')(app)
require('./routes/fetchMatch')(app)
// utils
const clearFiles = require('./utils/clearFiles')
app.listen(3000,()=>{
    clearFiles()()
    //可以用worker单独开启一个线程进行判断
    // setInterval(()=>{
    //     console.log("http://localhost:3000");
    //     clearFiles()()
    // },1000*60*60)
})

 