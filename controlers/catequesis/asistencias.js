const modelAsistencia = require('../../models/catequesis/asistencia');
module.exports = {
    listado: (req, res) => {
        modelAsistencia.listado((err, results) => {
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
        modelAsistencia.agregar(body, (err, results) => {
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
        modelAsistencia.borrar(id, (err, results) => {
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
        modelAsistencia.actualiza(body, (err, results) => {
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
        modelAsistencia.encontrar(id, (err, results) => {
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
    encontrarIntencionesMisa: (req, res) => {
        const misaId = req.params.id; // Obtener el ID de la URL
        console.log(misaId);
        modelAsistencia.encontrarIntencionesMisa(misaId, (err, results) => {
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
    }

};