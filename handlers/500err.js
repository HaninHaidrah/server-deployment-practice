// export the function that is related to catching general errore related to server

module.exports=(request,respond,error)=>{
    respond.status(500).send({
     message:error.message,
     error:500

    })
}