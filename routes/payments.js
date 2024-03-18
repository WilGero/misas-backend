const express = require('express');
const router = express.Router();
const cPayment = require("../controlers/payments");
// const auth = require('../auth');

router.post('/create-checkout-session/:id',cPayment.pagarIntencion2 );
router.get('/success', cPayment.success );
router.get('/cancel', cPayment.cancel);
// router.get('/encontrar-intencion/:id', cPayment.encontrarIntencion);

// router.post('/agregar', cRol.agrega);2
// router.delete('/borrar/:id', cRol.borrar);
// router.put('/actualizar', cRol.actualiza);
// router.get('/encontrar/:id', cRol.encontrar);

module.exports = router;