const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('Hello!')
})

app.get('/home',(req,res)=>{
    res.send('Hello! youre home')
})

app.get('/data',(req,res)=>{
    res.json({
        kittens: 3
    })
})
app.get('/fail',(req,res)=>{
    res.status(400).json({
        errorMsg :'missing parameters'
    })
})
const PORT = 8080
app.listen(PORT,()=> console.log(`Express is Running on: `+ PORT))
