const express = require('express');
const router = express.Router();

// Rutas para tareas
router.get('/ping', (req, res) => {
  res.send('Lista de tareas');
});

module.exports = router;
