const modelI = require('../models/intenciones');
module.exports = {
    listado: (req, res) => {
        modelI.listado((err, results) => {
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
        try {
            modelI.agregar(body, (err, results) => {
                if (err) {
                    console.error(err); // Registra el error en la consola para propósitos de depuración
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
        } catch (error) {
            console.error('Error al agregar una intencion:', error); // Registra el error en la consola para propósitos de depuración
            return res.status(500).json({
                success: 0,
                message: "Error al agregar una intencion"
            });
        }

    },
    borrar: (req, res) => {
        const id = req.params.id;
        modelI.borrar(id, (err, results) => {
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
        modelI.actualiza(body, (err, results) => {
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
        modelI.actualizaEstadoPago(body, (err, results) => {
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
        modelI.encontrar(id, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Error en la Base de Datos"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results[0][0] //hacer esta accion debido a la respuesta del procedimietno almacenado
            });
        });
    }

};