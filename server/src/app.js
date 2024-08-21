const express = require('express');
const {port} = require('./keys')

const app = express();
app.use(express.json()); // Permite leer los datos que envie el cliente en formato json



/** VARIABLES GLOBALES */
global.btn_mydomain = 'http://localhost:' + port

// Configuraciones
app.set('port' , port);

// Importar y usar la ruta de tareas
app.use('/', require('./router/index.router'));
app.use('/', require('./router/task.routes'));

// Ruta para manejar errores de rutas no encontradas
app.use((req, res) => {
  res.send("Ruta no encontrada");
});

app.listen(app.get('port'), () => {
  console.log("***********************************************************")
  console.log('===> 🚀 SERVIDOR CORRIENDO en http://localhost:' + app.get('port')) 
});

module.exports = app;