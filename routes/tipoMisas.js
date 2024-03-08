const express = require('express');
const router = express.Router();
const cTipoM = require("../controlers/tipoMisas");
const auth = require('../auth');

router.get('/listado',cTipoM.listado);
router.post('/agregar', cTipoM.agrega);
router.delete('/borrar/:id', cTipoM.borrar);
router.put('/actualizar', cTipoM.actualiza);
router.get('/encontrar/:id', cTipoM.encontrar);



module.exports = router;