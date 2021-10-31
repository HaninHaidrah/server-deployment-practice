'use strict';

const express=require('express');
const app=express();
require ('dotenv').config()
const PORT=process.env.PORT

// import the functions for errors and use them with middleware:
const catchIncorrectPaths=require('./handlers/404err');
const catchGeneralErrors=require('./handlers/500err')


// import the function for time and use it as a parameter withinn get 
const stamper=require('./middlewares/stamper')

// write end points
app.get('/',(req,res)=>{
    res.status(200).send('its the home page')
});


 app.get('/data',stamper,(req,res)=>{
 const courseData={
     'name':401,
     'language': 'javascript',
     'location':'online',
     'time': req.timestamp// we can use middlewares inside the get as the above example:
 }

 res.status(200).json(courseData)
 });



// use middlewares to catch errors:
app.use('*',catchIncorrectPaths) // to catch incorrect paths
app.use(catchGeneralErrors)// to catch any error related to server


// function to start :
 function start(){
     app.listen(PORT,()=>{
        console.log(`The server is working on port ${PORT}`)
     })
 }






// make the server availabe to be used in other files
module.exports={app,start}