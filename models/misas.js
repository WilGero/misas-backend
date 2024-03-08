const coneccion = require("../database");
module.exports = {
    listado: callBack => {
        coneccion.query(
            `select m.id as id_misa, m.fecha, tm.tipo_misa from misa as m inner join tipo_misa as tm on m.tipo_misa_id = tm.id `,
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
            [datos.fecha,datos.tipo_misa_id,datos.usuario_id],
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
            [datos.fecha,datos.tipo_misa_id,datos.usuario_id, datos.id],
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