const express = require('express');
const router = express.Router();

router.use(express.json());

router.get('/',(req,res)=>{
    res.json({"message":"All datas"});
});

router.get('/ping',(req,res)=>{
    res.send("Pong");
});

router.get('/:id',(req,res)=>{
    res.json({message:"GET a single workout"})
});

router.post('/api/data',(req,res)=>{
    const data = req.body;
    res.status(200).json({"message":"Post request"});
});

router.put('/api/update',(req,res)=>{
    res.status(200).json({"message":"Put method"});
});

router.delete('/:id',(req,res)=>{
    res.status(200).json({"message":"delete method"})
});

router.patch('/:id',(req,res)=>{
    res.status(200).json({message:"Update a workout"})
})

module.exports = router;