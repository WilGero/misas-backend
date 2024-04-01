const express = require('express');
const router = express.Router();
const cAsistencias = require("../../controlers/catequesis/asistencias");
const auth = require('../../auth');
router.get('/listado', cAsistencias.listado);
router.post('/agregar', cAsistencias.agrega);
router.delete('/borrar/:id', cAsistencias.borrar);
router.get('/encontrar/:id', cAsistencias.encontrar);
router.put('/actualizar', cAsistencias.actualiza);

module.exports = router;