const express = require('express');
const router = express.Router();
const cCtcClases = require("../../controlers/catequesis/catecumenosClase");
const auth = require('../../auth');
router.get('/listado', cCtcClases.listado);
router.post('/agregar', cCtcClases.agrega);
router.delete('/borrar/:id', cCtcClases.borrar);
router.get('/encontrar/:id', cCtcClases.encontrar);
router.put('/actualizar', cCtcClases.actualiza);
router.put('/actualizar-asistencia', cCtcClases.actualizaAsistencia);


module.exports = router;