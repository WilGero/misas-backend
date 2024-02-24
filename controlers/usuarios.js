const modelUser = require('../models/usuarios');
const jwt = require('jsonwebtoken');
module.exports = {
    listado: (req, res) => {
        modelUser.listado((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(results);
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    agrega: (req, res) => {
        const body = req.body;
        modelUser.agregar(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Error en la Base de Datos"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    borrar: (req, res) => {
        const userId = req.params.id;
        modelUser.borrar(userId, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Error en la Base de Datos"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    encontrar: (req, res) => {
        const userId = req.params.id; // Obtener el ID de la URL
        console.log(userId);
        modelUser.encontrar(userId, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Error en la Base de Datos"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results[0]
            });
        });
    },
    actualiza: (req, res) => {
        const body = req.body;
        modelUser.actualiza(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Error en la Base de Datos"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    login: (req, res) => {
        const body = req.body;
        modelUser.verifica(body, (err, results) => {
            if (err) return res.status(500).send("Error en la Base de Datos");
            if (results) {
                jwt.sign(JSON.stringify(results), process.env.SECRET, (err, token) => {
                    return res.status(200).json({
                        data: results,
                        token: token
                    });
                });
            }
            else return res.status(403).send('Credenciales Erroneas');
        });
    }
};