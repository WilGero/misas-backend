const express = require('express');
const router = express.Router();
const cInten = require("../controlers/intenciones");
const auth = require('../auth');

router.get('/listado',cInten.listado);
router.post('/agregar', cInten.agrega);
router.delete('/borrar/:id', cInten.borrar);
router.put('/actualizar',cInten.actualiza);
router.patch('/actualizar-estado', cInten.actualizaEstadoPago);
router.get('/encontrar/:id', cInten.encontrar);



module.exports = router;