const modelRol = require('../models/roles');
module.exports = {
    listado: (req, res) => {
        modelRol.listado((err, results) => {
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
        modelRol.agregar(body, (err, results) => {
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
        const rolId = req.params.id;
        modelRol.borrar(rolId, (err, results) => {
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
    actualiza: (req, res) => {
        const body = req.body;
        modelRol.actualiza(body, (err, results) => {
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
        const rolId = req.params.id; // Obtener el ID de la URL
        console.log(rolId);
        modelRol.encontrar(rolId, (err, results) => {
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
    }

};