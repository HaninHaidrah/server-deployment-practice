'use strict';

const express=require('express');
const app=express();
require ('dotenv').config()
const PORT=process.env.PORT

// import the functions for errors and use them with middleware:
const catchIncorrectPaths=require('./middlewares/404err');

// write end points
app.get('/',(req,res)=>{
    res.status(200).send('its the home page')
})

// use middlewares to catch errors:
app.use('*',catchIncorrectPaths) // to catch incorrect paths


// function to start :
 function start(){
     app.listen(PORT,()=>{
        console.log(`The server is working on port ${PORT}`)
     })
 }







// try to solve something





// make the server availabe to be used in other files
module.exports={app,start}