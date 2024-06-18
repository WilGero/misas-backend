const modelLI = require('../models/listaIntenciones');
module.exports = {
    listado: (req, res) => {
        modelLI.listado((err, results) => {
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
    listarUltimo: (req, res) => {
        // funcion que lista el dato agregado
        modelLI.listarUltimo((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(results);
            return res.json({
                success: 1,
                data: results[0]
            });
        });
    },
    agrega: (req, res) => {
        const body = req.body;
        modelLI.agregar(body, (err, results) => {
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
        const id = req.params.id;
        modelLI.borrar(id, (err, results) => {
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
        modelLI.actualiza(body, (err, results) => {
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
    actualizaEstadoPago: (req, res) => {
        const body = req.body;
        modelLI.actualizaEstadoPago(body, (err, results) => {
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
        const id = req.params.id; // Obtener el ID de la URL
        console.log(id);
        modelLI.encontrar(id, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Error en la Base de Datos"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results//hacer esta accion debido a la respuesta del procedimietno almacenado
            });
        });
    }

};