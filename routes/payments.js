const express = require('express');
const router = express.Router();
const cPayment = require("../controlers/payments");
// const auth = require('../auth');

router.post('/create-checkout-session',cPayment.createSession );
router.get('/success', cPayment.success );
router.get('/cancel', cPayment.cancel);

// router.post('/agregar', cRol.agrega);
// router.delete('/borrar/:id', cRol.borrar);
// router.put('/actualizar', cRol.actualiza);
// router.get('/encontrar/:id', cRol.encontrar);

module.exports = router;