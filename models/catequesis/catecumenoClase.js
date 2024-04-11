const coneccion = require("../../database");
module.exports = {
    listado: callBack => {
        coneccion.query(
            `SELECT ctcls.id,ctcls.asistencia_id,ctcls.clase_id,ctcls.catecumeno_id,a.tipo
            FROM catecumeno_clase ctcls 
            inner join asistencia a on a.id=ctcls.asistencia_id
            right join catecumeno ctc on ctc.id=ctcls.catecumeno_id;`,
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
            `insert into catecumeno_clase (asistencia_id,clase_id,catecumeno_id) 
            values (?, ?,?)`,
            [datos.asistencia_id,datos.clase_id,datos.catecumeno_id],
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
            `delete from catecumeno_clase where id=?`,
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
            `update catecumeno_clase set asistencia_id=?,clase_id=? where catecumeno_id=?`,
            [datos.asistencia_id,datos.clase_id,datos.catecumeno_id],
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
            `update catecumeno_clase set asistencia_id=? where id=?`,
            [datos.asistencia_id,datos.id],
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