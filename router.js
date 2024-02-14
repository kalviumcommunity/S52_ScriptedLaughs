const express = require('express');
const router = express.Router();
const {createTask,getAllTasks,getTaskById,deleteTask,updateTask,getTask} = require('./controllers/taskController');

router.get("/ping",getTask)
router.get('/',getAllTasks);
router.get('/:id',getTaskById);
router.post('/',createTask);
router.put('/:id',updateTask);
router.delete('/:id',deleteTask);

module.exports = router;