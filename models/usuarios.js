const coneccion = require("../database");
const crypto = require('crypto');
function sha256(string) {
    return crypto.createHash('sha256').update(string).digest('hex');
}
module.exports = {
    listado: callBack => {
        coneccion.query(
            `select * from usuario`,
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
            `insert into usuario (usuario, contra, rol_id) values ( ? , ? , ?)`,
            [datos.usuario, sha256(datos.contra), datos.rol_id],
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
            `delete from usuario where id=?`,
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
            `update usuario set usuario= ?, contra =?, rol_id=? where id = ?`,
            [datos.usuario,sha256(datos.contra), datos.rol_id, datos.id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    verifica: (datos, callBack) => {
        coneccion.query(
            `select * from usuario where usuario= ? and contra=?`,
            [datos.usuario, sha256(datos.contra)],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
}