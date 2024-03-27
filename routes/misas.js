const express = require('express');
const router = express.Router();
const cMisa = require("../controlers/misas");
const auth = require('../auth');

router.get('/listado',cMisa.listado);
router.post('/agregar', cMisa.agrega);
router.delete('/borrar/:id', cMisa.borrar);
router.put('/actualizar', cMisa.actualiza);
router.get('/encontrar/:id', cMisa.encontrar);
router.get('/encontrar-intenciones/:id', cMisa.encontrarIntencionesMisa);




module.exports = router;