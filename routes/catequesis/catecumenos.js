const express = require('express');
const router = express.Router();
const cCatecumeno = require("../../controlers/catequesis/catecumenos");
const auth = require('../../auth');
router.get('/listado', cCatecumeno.listado);
router.get('/listado/:id', cCatecumeno.listado2);
router.get('/listado-examen/:id', cCatecumeno.listadoExamen);
router.get('/asistencias/:id',cCatecumeno.asistencias);
router.post('/agregar', cCatecumeno.agrega);
router.delete('/borrar/:id', cCatecumeno.borrar);
router.get('/encontrar/:id', cCatecumeno.encontrar);
router.put('/actualizar', cCatecumeno.actualiza);
router.put('/actualizar-max', cCatecumeno.actualizarMaxPerFal);
router.put('/aumentar-per', cCatecumeno.aumentarMaxPer);


module.exports = router;