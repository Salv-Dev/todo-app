const express = require('express');
const router = express.Router();
const userController = require('./../controllers/user-controller');
const taskController = require('./../controllers/task-controller');
const authMiddleware = require('./../utils/authMiddleware');

// user routes
router.get('/user', authMiddleware, userController.getUser);
router.post('/signup', userController.postUser);
router.put('/user', authMiddleware, userController.putUser);
router.delete('/user', authMiddleware, userController.deleteUser);

// task routes
router.get('/task-groups', authMiddleware, taskController.getTasks);
router.post('/task-group', authMiddleware, taskController.postGroupTask);
router.post('/task', authMiddleware, taskController.postTask);
router.put('/task-group/:id', authMiddleware, taskController.putGroupTask);
router.put('/task/:id', authMiddleware, taskController.putTask);
router.delete('/task-group/:group_id', authMiddleware, taskController.deleteGroupTask);
router.delete('/task/:group_id/:task_id', authMiddleware, taskController.deleteTask);

module.exports = router;