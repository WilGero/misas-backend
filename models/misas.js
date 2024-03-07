const coneccion = require("../database");
module.exports = {
    listado: callBack => {
        coneccion.query(
            `select * from misa`,
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
            `insert into misa (fecha,tipo_misa_id,usuario_id) values ( ? , ? , ? )`,
            [datos.fecha,datos.tipoMisaId,datos.usuarioId],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    borrar: (misaId, callBack) => {
        coneccion.query(
            `delete from misa where id=?`,
            [misaId],
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
            `update misa set fecha = ?,tipo_misa_id = ?,usuario_id = ? where id = ?`,
            [datos.fecha,datos.tipoMisaId,datos.usuarioId, datos.id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    encontrar: (misaId, callBack) => {
        coneccion.query(
            `select * from misa where id=?`,
            [misaId],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    }
}