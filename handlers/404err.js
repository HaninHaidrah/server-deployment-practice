// export the function that is for handling the error404:

module.exports=(request,respond)=>{
    respond.status(404).send({
   message:'The path is not existed',
   error:404
    })// use object,so we can add more things as messages to client
}