const coneccion = require("../database");
module.exports = {
    listado: callBack => {
        coneccion.query(
            `select * from intencion`,
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
            `insert into intencion (razon, descripcion, misa_id, tipo_intencion_id, usuario_id) values ( ? , ?, ?,?,?  )`,
            [datos.razon, datos.descripcion, datos.misa_id, datos.tipo_intencion_id, datos.usuario_id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    borrar: (id, callBack) => {
        coneccion.query(
            `delete from intencion where id=?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    actualiza: (datos, callBack) => {
        coneccion.query(
            `update intencion set razon = ?,descripcion = ?, misa_id=?, tipo_intencion_id=?, usuario_id=? where id = ?`,
            [datos.razon, datos.descripcion, datos.misa_id, datos.tipo_intencion_id, datos.usuario_id, datos.id],
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
            `select * from intencion where id=?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    }
}