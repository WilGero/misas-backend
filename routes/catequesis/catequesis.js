const express = require('express');
const router = express.Router();
const cCatequesis = require("../../controlers/catequesis/catequesis");
const auth = require('../../auth');
router.get('/listado', cCatequesis.listado);
router.get('/asistencia-catecumenos', cCatequesis.asistenciaCatecumenos);
router.post('/agregar', cCatequesis.agrega);
router.delete('/borrar/:id', cCatequesis.borrar);
router.get('/encontrar/:id', cCatequesis.encontrar);
router.put('/actualizar', cCatequesis.actualiza);

module.exports = router;