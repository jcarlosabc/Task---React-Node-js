const pool = require('../database/db');

exports.getTasks = async (req, res) => {
   try {
      const respuesta = await pool.query('SELECT * FROM tasks ORDER BY createAt ASC');
      if (respuesta.length > 0) {
         res.json(respuesta);
      } else {
         res.status(404).json({message: 'No hay tareas'});
      }
   } catch (error) {
      return res.status(500).json({message: 'Error en el servidor'});
   }
};

exports.getTask = async (req, res) => {
   try {
      const respuesta  = await pool.query('SELECT * FROM tasks WHERE id = ?', [req.params.id]);
      if (respuesta.length > 0) {
         res.json(respuesta[0]);
      } else {
         res.status(404).json({message: 'No hay tareas'});
      }
      
   } catch (error) {
      return res.status(500).json({message: 'Error en el servidor'});
   }
};

exports.createTasks = async (req, res) => {
   try {
      const datos = {title, description} = req.body;
      await pool.query('INSERT INTO tasks SET ?', [datos]);
      res.json({message: 'Tarea creada'});
   } catch (error) {
      return res.status(500).json({message: 'Error en el servidor'});
   }
   
};

exports.updateTasks = async (req, res) => {
   try {
      const datos = {title, description} = req.body;
      const respuesta = await pool.query('UPDATE tasks SET ? WHERE id = ?', [datos, req.params.id]);
      if (respuesta.affectedRows > 0) {
         res.json({message: 'Tarea actualizada'});
      } else {
         res.status(404).json({message: 'No se pudo actualizar la tarea'});
      }
   } catch (error) {
      return res.status(500).json({message: 'Error en el servidor'});
   }
   
};

exports.deleteTasks = async (req, res) => {
   try {
      await pool.query('DELETE FROM tasks WHERE id = ?', [req.params.id]);
      res.json({message: 'Tarea eliminada'});
   } catch (error) {
      return res.status(500).json({message: 'Error en el servidor'});
   }
};

