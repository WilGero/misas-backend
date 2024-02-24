const express = require('express');
const router = express.Router();
const cUser = require("../controlers/usuarios");
const auth = require('../auth');
router.get('/listado', cUser.listado);
router.post('/agregar', cUser.agrega);
router.delete('/borrar/:id', cUser.borrar);
router.get('/encontrar/:id', cUser.encontrar);
router.put('/actualizar', cUser.actualiza);
router.post('/login',cUser.login);

module.exports = router;