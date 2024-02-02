const express = require('express');
const PORT = 3000;

const app = express();

app.get("/ping",(req,res)=>{
    res.send("pong");
});

app.listen(PORT,()=>{
    console.log("server is running on",PORT);
})