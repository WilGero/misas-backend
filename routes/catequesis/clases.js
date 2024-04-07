const express = require('express');
const router = express.Router();
const cClases = require("../../controlers/catequesis/clases");
const auth = require('../../auth');
router.get('/listado', cClases.listado);
router.post('/agregar', cClases.agrega);
router.delete('/borrar/:id', cClases.borrar);
router.get('/encontrar/:id', cClases.encontrar);
router.get('/encontrar2/:id', cClases.encontrar2);
router.put('/actualizar', cClases.actualiza);

module.exports = router;