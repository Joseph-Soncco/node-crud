const mysql = require('mysql');
const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'crudnode'
});

conexion.connect((error) => {
  if (error){
    console.error(`Error en la conexión: ${error}`);
    return;
  }

  console.log(`Conectado correctamente al servidor`);
});

//Exportarlo
module.exports = conexion;