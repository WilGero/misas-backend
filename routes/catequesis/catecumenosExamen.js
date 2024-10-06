const express = require('express');
const router = express.Router();
const cCtcExamenes = require("../../controlers/catequesis/catecumenosExamen");
const auth = require('../../auth');
router.get('/listado', cCtcExamenes.listado);
router.get('/listado-catecumenos', cCtcExamenes.listadoCatecumenos);
router.post('/agregar', cCtcExamenes.agrega);
router.delete('/borrar/:examen_id/:catecumeno_id', cCtcExamenes.borrar);
router.get('/encontrar/:id', cCtcExamenes.encontrar);
router.put('/actualizar-nota', cCtcExamenes.actualizaNota);
router.put('/actualizar-puntos', cCtcExamenes.actualizaPuntos);
router.put('/actualizar-nota-final', cCtcExamenes.actualizaNotaFinal);

router.put('/cambiar-estado-multa', cCtcExamenes.cambiarEstadoMulta);

module.exports = router;