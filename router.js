const express = require('express');

const router = express.Router();

router.use(express.json());

router.get('/',(req,res)=>{
    res.json({"message":"All datas"});
});

router.get('/ping',(req,res)=>{
    res.send("Pong");
});

router.post('/api/data',(req,res)=>{
    const data = req.body;
    res.status(200).json({"message":"Post request","data":data});
});

router.put('/api/update',(req,res)=>{
    res.status(200).json({"message":"Put method"});
});

router.delete('/api/delete',(req,res)=>{
    res.status(200).json({"message":"delete method"})
});

module.exports = router;