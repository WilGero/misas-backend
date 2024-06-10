const coneccion = require("../../database");
const asistencia = require("./asistencia");
module.exports = {
    listado: callBack => {
        coneccion.query(
            `select * from catequesis;`,
            [],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    asistenciaCatecumenos: callBack => {
        coneccion.query(
            `SELECT c.id,c.nombres,c.apellidos,a.tipo,a.multa,cl.tema,cl.fecha_hora, ccl.estado_multa from catecumeno_clase ccl 
            INNER JOIN catecumeno c ON ccl.catecumeno_id=c.id 
            INNER JOIN asistencia a ON ccl.asistencia_id=a.id 
            INNER JOIN clase cl ON ccl.clase_id=cl.id 
            WHERE ccl.asistencia_id!=1 and ccl.estado_multa=0 
            ORDER BY c.apellidos,c.nombres;`,
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
            `insert into catequesis (nombre,requisitos) 
            values (?, ?)`,
            [datos.nombre, datos.requisitos],
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
            `delete from catequesis where id=?`,
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
            `update catequesis set nombre=?,requisitos=? where id = ?`,
            [datos.nombre, datos.requisitos, datos.id],
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
            `select * from catequesis 
            where id=?;`,
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