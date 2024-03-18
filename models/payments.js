const coneccion = require("../database");

module.exports = {
    listado: callBack => {
        coneccion.query(
            `select * from intenciones`,
            [],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    agregar: (datos, callBack) => {
        coneccion.query(
            `INSERT INTO intenciones (nombre, cantidad) VALUES (?, ?)`,
            [datos.nombre, datos.cantidad],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    borrar: (userId, callBack) => {
        coneccion.query(
            `delete from usuario where id=?`,
            [userId],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    encontrar: (id, callBack) => {
        coneccion.query(
            `select * from intenciones where id=?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    encontrarIntencion: (id, callBack) => {
        coneccion.query(
            `select i.id, i.razon, i.descripcion, ti.tipo,ti.costo from intencion i inner join tipo_intencion ti on i.tipo_intencion_id=ti.id where i.id=?;`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    marcarIntencionComoPagada: (id, callBack) => {
        coneccion.query(
            `UPDATE intenciones SET pagado = 1 WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },


}