const express = require('express');
const router = express.Router();
const cLista = require("../controlers/listaIntenciones");
const auth = require('../auth');

router.get('/listado',cLista.listado);
router.get('/listar-ultimo',cLista.listarUltimo);
router.post('/agregar', cLista.agrega);
router.delete('/borrar/:id', cLista.borrar);
router.patch('/actualizar-estado', cLista.actualizaEstadoPago);
router.get('/encontrar/:id', cLista.encontrar);



module.exports = router;