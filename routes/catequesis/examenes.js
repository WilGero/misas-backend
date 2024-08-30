const express = require('express');
const router = express.Router();
const cExamenes = require("../../controlers/catequesis/examenes");
const auth = require('../../auth');
router.get('/listado', cExamenes.listado);
router.post('/agregar', cExamenes.agrega);
router.delete('/borrar/:id', cExamenes.borrar);
router.get('/encontrar/:id', cExamenes.encontrar);
router.put('/actualizar', cExamenes.actualiza);

module.exports = router;