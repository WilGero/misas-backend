// import Stripe from 'stripe';
const stripe = require('stripe')(require('../config').stripeSecretKey);
// const modelRol = require('../models/roles');
module.exports = {
    createSession: async (req, res) => {
       const session = await stripe.checkout.sessions.create({
            line_items:[
                {
                    price_data:{
                        product_data:{
                            name:'laptop',
                            description:'Gaming Laptop'
                        },
                        currency:'usd',
                        unit_amount:20000, //200.00
                    },
                    quantity:1
                },
                {
                    price_data:{
                        product_data:{
                            name:'TV',
                            description:'Smart TV'
                        },
                        currency:'usd',
                        unit_amount:10000, //100.00
                    },
                    quantity:2
                }
            ],
            mode:'payment',
            success_url:'http://localhost:5050/pagos/success',
            cancel_url:'http://localhost:5050/pagos/cancel',
        });
        return res.json(session);
    },
    success: (req, res) => res.send('sucess'),
    cancel:(req, res) => res.send('cancel')
};