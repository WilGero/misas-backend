const express = require('express');
const router = express.Router();
const cUser = require("../controlers/usuarios");
const auth = require('../auth');
router.get('/listado', auth.verificatoken,cUser.listado);
router.post('/agregar', cUser.agrega);
router.delete('/borrar', cUser.borrar);
router.put('/actualizar', cUser.actualiza);
router.post('/login',cUser.login);

module.exports = router;