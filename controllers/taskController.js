const {TaskSchema,LoginShema} = require('../models/dataModel');


const showAllLoginInfo = async(req,res) =>{
    try{
        const showDetails = await LoginShema.find({})
        res.status(200).json(showDetails)
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
}
const createLoginInfo = async(req,res)=>{
    const {name,email,password} = req.body
    try{
        const creatInfo = await LoginShema.create({name,email,password})
        res.status(200).json(creatInfo)
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
}


const getTask = async(req,res)=>{
    res.send("pong");
}

const getAllTasks = async(req,res)=>{
    try{
        const tasks = await TaskSchema.find();
        res.status(200).json(tasks); 
    }
    catch(err){
        res.status(400).json({message:err.message}) 
    }
};

const getTaskById = async (req,res)=>{
    try{
        const tasks = await TaskSchema.findById(req.params.id);
        if(!tasks){
            res.status(404).json({message:"Task not found"}) 
        }
        res.status(200).json(tasks); 
    }catch(err){
        res.status(500).json({message:err.message}); 
    }
};

const createTask = async (req,res) =>{
    const {username,title,description,category}  = req.body;
    try{
        const tasks = await TaskSchema.create({username,title,description,category});
        res.status(200).json(tasks); 
    }
    catch(err){
        res.status(400).json({message:err.message}) 
    }
}

const updateTask = async (req,res) => {
    try{
        const {id} = req.params;
        const {username,title,description,category} = req.body
        const tasks = await TaskSchema.findByIdAndUpdate({_id:id},req.body,{new:true});
        if(!tasks){
            return res.status(400).json({message:"Task not found"}); 
        }
        res.status(200).json(tasks); 
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
};

const deleteTask = async (req,res) =>{
    try{
        const id = req.params.id;
        const tasks = await TaskSchema.findByIdAndDelete({_id:id})
        if(!tasks){
            return res.status(404).json({message:"Task not found"})
        }
        res.json({message:"Task deleted successfully"})
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}

module.exports = {getAllTasks,getTaskById,updateTask,deleteTask,createTask,getTask,createLoginInfo,showAllLoginInfo}
 