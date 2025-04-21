const express = require('express');
const app = express();

//Motor de plantillas
app.set('view engine', 'ejs');

//Configuración captura de datos
app.use(express.urlencoded({extended: false}));
app.use(express(express.json));

//Enrutador - "/" = index
app.use('/', require('./router'));

app.listen(5000, () => {
  console.log("Servidor ejecutándose en http://localhost:5000")
});