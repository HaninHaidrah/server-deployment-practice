// export the function that is used to get the time and here we'll use next parameter

module.exports=(req,res,next)=>{
    req.timestamp= new Date();
    next();
}