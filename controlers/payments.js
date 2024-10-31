// import Stripe from 'stripe';
const stripe = require('stripe')(require('../config').stripeSecretKey);
const modelP = require('../models/payments');
const modelLI = require('../models/listaIntenciones');

module.exports = {
    pagarIntencion: (req, res) => {
        const id = req.params.id;
        console.log(id);
        modelP.encontrarIntencion(id, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Error en la Base de Datos"
                });
            }
            // Aquí deberías tener los detalles de tu artículo en 'results' desde la base de datos
            const itemDetails = results[0];
            // Ajusta esto según la estructura de tu modelo
            console.log('esta es una intencion: ' + itemDetails);
            // Llama a la función createSession y pasa los detalles del artículo
            module.exports.createSession(req, res, itemDetails);
        });
    },
    pagarIntencion2: (req, res) => {
        const id = req.params.id;//id de la lista de intenciones
        console.log(id);
        modelLI.encontrar(id, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Error en la Base de Datos"
                });
            }
            // Aquí deberías tener los detalles de tu artículo en 'results' desde la base de datos
            const itemDetails = results;
            // Ajusta esto según la estructura de tu modelo
            console.log('esta es una intencion: ' + itemDetails);
            // Llama a la función createSession y pasa los detalles del artículo
            module.exports.createSession(req, res, itemDetails);
        });
    },

    createSession: async (req, res, itemDetails) => {
        console.log('repito esta es una intencion: ' + itemDetails);
        const tipo = itemDetails.tipo;
        console.log('este es el tipo de intencion: ' + tipo);

        try {
            const lineItems=[];
            for (let i = 0; i < itemDetails.length; i++) {
               const item = {
                    price_data: {
                        product_data: {
                            name: itemDetails[i].tipo, // Ajusta según la estructura de tu modelo
                                description: itemDetails[i].descripcion
                        },
                        currency: 'usd',
                            unit_amount: itemDetails[i].costo *10,
                    },
                    quantity: 1
                }
                lineItems.push(item);
            }
            console.log(lineItems);

            // Utiliza la información del artículo de la base de datos para crear la sesión
            const session = await stripe.checkout.sessions.create({
                line_items:lineItems,
                mode: 'payment',
                success_url: 'https://parroquia-vinto.netlify.app/intencion-pagada/'+itemDetails[0].lista_id,
                cancel_url: 'https://parroquia-vinto.netlify.app/listado-intenciones/'+ itemDetails[0].misa_id+'/'+itemDetails[0].lista_id,
            });

            return res.json(session);
        } catch (error) {
            console.error('Error al crear la sesión:', error);
            return res.status(500).json({
                success: 0,
                message: "Error al crear la sesión de pago"
            });
        }
    },

    success: (req, res) => res.send('sucess'),
    cancel: (req, res) => res.send('cancel'),

};