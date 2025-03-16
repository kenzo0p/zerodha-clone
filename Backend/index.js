const dotenv = require('dotenv')
dotenv.config();
const express = require('express');
const { connectionInstance } = require('./src/database/db.js');
const app = express();


app.get( "/" , (req,res) => {
    res.send("Hii")
})
app.listen(3000 , ()=>{
    connectionInstance();
    console.log(`Server is started on http://localhost:${process.env.PORT || 3000}`);
})