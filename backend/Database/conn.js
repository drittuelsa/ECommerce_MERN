const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/products')
.then(()=>console.log("Connection completed"))
.catch(err => console.log("error" +  err.message))