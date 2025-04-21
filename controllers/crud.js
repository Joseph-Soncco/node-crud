const conexion = require('../database/db');

exports.save = (req, res) => {
  //Acceder a los datos enviados (vista)
  const tipo = req.body.tipo;
  const marca = req.body.marca;
  const color = req.body.color;

  //NOTA: Se debe especificar cómo capturar los datos de los <form></form> app.js
  //Evidencia de captura de datos
  //console.log(tipo, marca, color);

  conexion.query(`INSERT INTO vehiculos SET ?`, 
    { tipo: tipo, marca: marca, color: color }, (error, results) => {
      if (error){
        console.log(error);
      }else{
        //Redireccionar
        //console.log("Grabado correctamente");
        res.redirect('/');
      }
    });
};

exports.update = (req, res) => {
  //Acceder a los datos enviados (vista)
  const id = req.body.id;
  const tipo = req.body.tipo;
  const marca = req.body.marca;
  const color = req.body.color;

  //NOTA: Se debe especificar cómo capturar los datos de los <form></form> app.js
  //Evidencia de captura de datos
  //console.log(tipo, marca, color);

  conexion.query(`UPDATE vehiculos SET ? WHERE id = ?`, 
    [{ tipo: tipo, marca: marca, color: color },id], (error, results) => {
      if (error){
        console.log(error);
      }else{
        //Redireccionar
        //console.log("Grabado correctamente");
        res.redirect('/');
      }
    });
};