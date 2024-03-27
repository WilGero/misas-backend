const coneccion = require("../database");
module.exports = {
    listado: callBack => {
        coneccion.query(
            `select li.id,i.razon ,li.estado_pago,li.created_at,m.id misa_id,m.estado estado_misa,
             m.fecha, tm.tipo_misa, i.usuario_id, i.estado_pago pago_intencion
            from lista_intenciones li
                        inner join intencion i on li.id=i.lista_id
                        inner join misa m on i.misa_id=m.id
                        inner join tipo_misa tm on tm.id=m.tipo_misa_id
                        GROUP BY li.id
                        ORDER BY li.created_at ASC;`,
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