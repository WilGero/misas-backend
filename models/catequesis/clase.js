const coneccion = require("../../database");
module.exports = {
    listado: callBack => {
        coneccion.query(
            `select * from clase;`,
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
            `insert into clase (tema,fecha_hora,descripcion,observaciones,catequesis_id) 
            values (?, ?,?,?, ?)`,
            [datos.tema, datos.fecha_hora, datos.descripcion, datos.observaciones, datos.catequesis_id],
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
            `delete from clase where id=?`,
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
            `update clase set tema=?,fecha_hora=?,descripcion=?,observaciones=?,catequesis_id=? where id = ?`,
            [datos.tema, datos.fecha_hora, datos.descripcion, datos.observaciones, datos.catequesis_id, datos.id],
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
            `select cl.id, cl.tema,cl.fecha_hora,cl.descripcion,cl.observaciones,cl.catequesis_id,ctq.nombre,
            ctcls.catecumeno_id,ctcls.asistencia_id
            from clase cl
                    inner join catequesis ctq on cl.catequesis_id=ctq.id 
                    inner join catecumeno_clase ctcls on cl.id=ctcls.clase_id 
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
    encontrar2: (id, callBack) => {
        coneccion.query(
            `select cl.id, cl.tema,cl.fecha_hora,cl.descripcion,cl.observaciones,cl.catequesis_id,ctq.nombre
            from clase cl
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


}