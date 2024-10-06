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
    listadoCatecumenos: callBack => {
        coneccion.query(
            `SELECT c.id, c.apellidos, c.nombres,e.titulo,e.fecha, ce.nota,ce.puntos,LEAST(ce.nota + ce.puntos, 100) AS nota_final
             from catecumeno_examen ce
            inner join catecumeno c on ce.catecumeno_id=c.id
            inner join examen e on ce.examen_id=e.id
            order by c.apellidos,c.id,e.fecha;`,
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
            `insert into catecumeno_examen (nota,puntos,nota_final,catecumeno_id,examen_id) 
            values (?, ?,?,?,?)`,
            [datos.nota, datos.puntos, datos.nota_final, datos.catecumeno_id, datos.examen_id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    borrar: (catecumeno_id, examen_id, callBack) => {
        coneccion.query(
            `delete from catecumeno_examen where catecumeno_id=? AND examen_id=?`,
            [catecumeno_id, examen_id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    actualizaNota: (datos, callBack) => {
        coneccion.query(
            `update catecumeno_examen set nota=? where catecumeno_id=? AND examen_id=?`,
            [datos.nota, datos.catecumeno_id, datos.examen_id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    actualizaPuntos: (datos, callBack) => {
        coneccion.query(
            `update catecumeno_examen set puntos=? where catecumeno_id=? AND examen_id=?`,
            [datos.puntos, datos.catecumeno_id, datos.examen_id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    actualizaNotaFinal: (datos, callBack) => {
        coneccion.query(
            `update catecumeno_examen set nota_final=? where catecumeno_id=? AND examen_id=?`,
            [datos.nota_final, datos.catecumeno_id, datos.examen_id],
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
            `select * from catecumeno_examen ce
            where ce.examen_id=?;`,
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