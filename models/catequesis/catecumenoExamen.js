const coneccion = require("../../database");
module.exports = {
    listado: callBack => {
        coneccion.query(
            `SELECT * from catecumeno_examen;`,
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
            `insert into catecumeno_examen (nota,catecumeno_id,examen_id) 
            values (?, ?,?)`,
            [datos.nota, datos.catecumeno_id, datos.examen_id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    borrar: (catecumeno_id,examen_id, callBack) => {
        coneccion.query(
            `delete from catecumeno_examen where catecumeno_id=? AND examen_id=?`,
            [catecumeno_id,examen_id],
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
            `update catecumeno_examen set nota=? where catecumeno_id=? AND examen_id=?`,
            [datos.nota, datos.catecumeno_id, datos.examen_id ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    actualizaAsistencia: (datos, callBack) => {
        coneccion.query(
            `update catecumeno_examen set asistencia_id=? where id=?`,
            [datos.asistencia_id, datos.id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    cambiarEstadoMulta: (datos, callBack) => {
        coneccion.query(
            `update catecumeno_examen set estado_multa=? where id = ?`,
            [datos.estado_multa, datos.id],
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
            `select cl.id, cl.tema,cl.fecha_hora,cl.descripcion,cl.observaciones,cl.catequesis_id,ctq.nombre from clase cl
            inner join catequesis ctq on cl.catequesis_id=ctq.id 
            where cl.id=?;`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    encontrarIntencionesMisa: (misaId, callBack) => {
        coneccion.query(
            `select m.id misa_id,tm.tipo_misa,m.fecha,i.descripcion,i.razon,m.estado  
            from misa m 
            inner join intencion i on m.id=i.misa_id
            inner join tipo_misa tm on m.tipo_misa_id=tm.id
            where m.id=?;`,
            [misaId],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },


}