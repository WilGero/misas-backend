const modelCatecumeno = require('../../models/catequesis/catecumeno');
module.exports = {
    listado: (req, res) => {
        modelCatecumeno.listado((err, results) => {
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
    listado2: (req, res) => {
        const id = req.params.id; // Obtener el ID de la URL
        modelCatecumeno.listado2(id,(err, results) => {
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
    asistencias: (req, res) => {
        const id = req.params.id; // Obtener el ID de la URL
        modelCatecumeno.asistencias(id,(err, results) => {
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
        modelCatecumeno.agregar(body, (err, results) => {
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
        modelCatecumeno.borrar(id, (err, results) => {
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
        modelCatecumeno.actualiza(body, (err, results) => {
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
        modelCatecumeno.encontrar(id, (err, results) => {
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
        modelCatecumeno.encontrarIntencionesMisa(misaId, (err, results) => {
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