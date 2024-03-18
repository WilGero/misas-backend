const coneccion = require("../database");
module.exports = {
    listado: callBack => {
        coneccion.query(
            `select * from lista_intenciones`,
            [],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    listarUltimo: callBack => {
        // funcion que lista el dato agregado
        coneccion.query(
            `SELECT * FROM lista_intenciones
            ORDER BY id DESC
            LIMIT 1;`,
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
            `insert into lista_intenciones (estado_pago) values ( 0 )`,
            [],
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
            `delete from lista_intenciones where id=?`,
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
            `update intencion set razon = ?,descripcion = ?,estado_pago=?, misa_id=?, tipo_intencion_id=?, usuario_id=? where id = ?`,
            [datos.razon, datos.descripcion, datos.estado_pago, datos.misa_id, datos.tipo_intencion_id, datos.usuario_id, datos.id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    actualizaEstadoPago: (datos, callBack) => {
        coneccion.query(
            `update lista_intenciones set estado_pago = ? where id = ?`,
            [datos.estado_pago, datos.id],
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
            `call obtener_intenciones(?);`,
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