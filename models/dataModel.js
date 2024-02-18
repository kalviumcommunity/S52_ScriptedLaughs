const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    title: String,
    description: String,
    category: String,
}, { versionKey: false });

const loginSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
},{versionKey:false})

const TaskSchema = mongoose.model("datas", taskSchema);
const LoginShema = mongoose.model("details",loginSchema);
module.exports = {TaskSchema,LoginShema}
