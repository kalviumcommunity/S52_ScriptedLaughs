const Task = require('../models/dataModel');

const getTask = async(req,res)=>{
    res.send("pong");
}

const getAllTasks = async(req,res)=>{
    try{
        const tasks = await Task.find();
        res.status(200).json(tasks); 
    }
    catch(err){
        res.status(400).json({message:err.message}) 
    }
};

const getTaskById = async (req,res)=>{
    try{
        const tasks = await Task.findById(req.params.id);
        if(!tasks){
            res.status(404).json({message:"Task not found"}) 
        }
        res.status(200).json(tasks); 
    }catch(err){
        res.status(500).json({message:err.message}); 
    }
};

const createTask = async (req,res) =>{
    const {username,title,description,category,difficulty}  = req.body;
    try{
        const tasks = await Task.create({username,title,description,category,difficulty});
        res.status(200).json(tasks); 
    }
    catch(err){
        res.status(400).json({message:err.message}) 
    }
}

const updateTask = async (req,res) => {
    try{
        const {id} = req.params;
        const tasks = await Task.findByIdAndUpdate({_id:id},req.body,{new:true});
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
        const tasks = await Task.findByIdAndDelete(req.params.id)
        if(!tasks){
            return res.status(404).json({message:"Task not found"})
        }
        res.json({message:"Task deleted successfully"})
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}

module.exports = {getAllTasks,getTaskById,updateTask,deleteTask,createTask,getTask}
 