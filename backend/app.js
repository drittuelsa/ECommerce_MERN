const express = require('express')
const mongoose = require('mongoose')


const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

require('./Database/conn')

const Products = require('./models/productSchema')
const DefaultData = require('./defaultdata')
const router = require('./routes/router')
const cors = require('cors')

app.use(express.json())
app.use(router)
app.use(cors())

// app.get('/', (req,res)=>{
//     res.send(" THIS IS MY PAGE")
// })

// const corsOptions = {
//     origin: 'http://localhost:3000',
// };

// app.use(cors(corsOptions));

const port = process.env.PORT || 8080

app.listen(port, ()=>
console.log(`Port is running at ${port} `)
)

DefaultData();