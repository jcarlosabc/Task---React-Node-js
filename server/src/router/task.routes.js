const express = require('express');
const router = express.Router();
const { getTasks, getTask, createTasks, updateTasks, deleteTasks } = require('../controllers/task.controllers');

// Obtener una tarea
router.get('/task', getTasks);

// Obtener una tarea específica
router.get('/task/:id', getTask);

// Crear una nueva tarea
router.post('/task', createTasks);

// Actualizar una tarea
router.put('/task/:id', updateTasks);

// Eliminar una tarea
router.delete('/task/:id', deleteTasks);

module.exports = router;
