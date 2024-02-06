const express = require('express');
const routes = require('./router');
require('dotenv').config();
// const mongoose = require('mongoose');
const PORT = 8000;
const {startDatabase,stopDatabase,isConnect} = require('./db')

const app = express();

app.use("/prankscripts",routes);

app.listen(PORT,()=>{
    startDatabase();
    console.log("server is running on",PORT);
})