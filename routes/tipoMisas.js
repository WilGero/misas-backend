const express = require('express');
const router = express.Router();
const cTipoI = require("../controlers/tipoMisas");
const auth = require('../auth');

router.get('/listado',cTipoI.listado);
router.post('/agregar', cTipoI.agrega);
router.delete('/borrar/:id', cTipoI.borrar);
router.put('/actualizar', cTipoI.actualiza);
router.get('/encontrar/:id', cTipoI.encontrar);



module.exports = router;