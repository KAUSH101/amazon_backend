const express = require('express')
const cors = require('cors')
require ('dotenv').config()
const { connection } = require('./Config/db')
const { ProductModel } = require('./models/products.model')
const { ProductRouter } = require('./routes/ProductRoute')


const app = express()
app.use(express.json())
app.use(cors())
app.use("/product" , ProductRouter)


app.get("/",(req,res)=>{
    res.send("welcome")
})






app.listen(process.env.port, async()=>{
    try {

        await connection
        console.log("connected");
        
    } catch (error) {
        console.log(error);
        
    }
})