const express = require('express');
const router = express.Router();
const conexion = require('./database/db');

//req = solicitud | res = respuesta
router.get('/', (req, res) => {
  //Retornamos una colección de datos. Consulta exitosa "results", falló "error"
  conexion.query("SELECT * FROM vehiculos", (error, results) => {
    if (error){
      throw error;
    }else{
      //Enviamos "json" los datos al navegador
      //res.send(results);
      //res.render('edit', { dev: 'Joseph Emanuel Soncco Flores', skill: 'Javascript', friends: ['Kevin', 'Frank', 'Saul'] });
      res.render('index', { datosObtenidos: results })
    }
  });
});

//Enrutador para el registro
router.get('/create', (req, res) => {
  res.render('create');
});

//Es necesario el ID para este proceso
router.get('/delete/:id', (req, res) => {
  const idvehiculo = req.params.id;
  conexion.query("DELETE FROM vehiculos WHERE id = ?", [idvehiculo], (error, results) => {
    if(error){
      throw(error);
    }else{
      res.redirect('/');
    }
  });
});

//Para editar, debemos identificar el registro
router.get('/edit/:id', (req, res)=>{
  conexion.query("SELECT * FROM vehiculos WHERE id = ?", [req.params.id], (error, results) => {
    if(error){
      throw(error);
    }else{
      res.render('edit',{ vehiculo: results[0] });
    }
  });
});

//Acceder a toda la lógica
const crud = require('./controllers/crud');
router.post('/save', crud.save);
router.post('/update', crud.update);

module.exports = router;