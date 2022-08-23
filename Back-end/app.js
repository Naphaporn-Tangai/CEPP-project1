const express = require('express')
const app = express()
const mongoose = require('mongoose')


mongoose.connect("mongodb+srv://adminProject:adminProject@cluster0.2dnpotc.mongodb.net/?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log("Mogodb connected"))
.catch((err)=>console.log('Error',err))

app.get('/',( req, res) => {
    res.send('Hello app.js')
})

app.listen(3000, () =>{
    console.log('Server port 3000')
})