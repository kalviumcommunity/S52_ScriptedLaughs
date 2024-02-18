const express = require('express');
const router = express.Router();
const {createTask,getAllTasks,getTaskById,deleteTask,updateTask,getTask,createLoginInfo,showAllLoginInfo} = require('./controllers/taskController');

router.get("/ping",getTask);
router.get('/',getAllTasks);
router.get('/getUserData/:id',getTaskById);
router.get('/getallLoginInfo',showAllLoginInfo)
router.post('/create',createTask);
router.post('/loginPage',createLoginInfo);
router.put('/updateData/:id',updateTask);
router.delete('/deleteData/:id',deleteTask);


module.exports = router;