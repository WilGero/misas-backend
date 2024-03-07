const express = require('express');
const router = express.Router();
const cRol = require("../controlers/roles");
const auth = require('../auth');

router.get('/listado',cRol.listado);
router.post('/agregar', cRol.agrega);
router.delete('/borrar/:id', cRol.borrar);
router.put('/actualizar', cRol.actualiza);
router.get('/encontrar/:id', cRol.encontrar);



module.exports = router;