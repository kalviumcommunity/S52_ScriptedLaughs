const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const PORT = 3000;
const {startDatabase,stopDatabase,isConnect} = require('./db')

const app = express();

app.get("/ping",(req,res)=>{
    res.send("pong");
});

app.listen(PORT,()=>{
    startDatabase();
    console.log("server is running on",PORT);
})