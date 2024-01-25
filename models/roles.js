const coneccion = require("../database");
module.exports = {
    listado: callBack => {
        coneccion.query(
            `select * from rol_usuario`,
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
            `insert into rol_usuario (nombre) values ( ? )`,
            [datos.nombre],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    borrar: (datos, callBack) => {
        coneccion.query(
            `delete from rol_usuario where id=?`,
            [datos.id],
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
            `update rol_usuario set nombre= ? where id = ?`,
            [datos.nombre,datos.id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    }
}