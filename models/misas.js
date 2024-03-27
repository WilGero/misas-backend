const coneccion = require("../database");
module.exports = {
    listado: callBack => {
        coneccion.query(
            `select m.id as id_misa, m.descripcion,m.fecha, tm.tipo_misa, m.estado 
            from misa as m inner join tipo_misa as tm on m.tipo_misa_id = tm.id
            order by m.fecha `,
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
            `insert into misa (descripcion,fecha,tipo_misa_id,usuario_id) values (?, ? , ? , ? )`,
            [datos.descripcion,datos.fecha,datos.tipo_misa_id,datos.usuario_id],
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
            `update misa set descripcion=?, fecha = ?,tipo_misa_id = ?,usuario_id = ? where id = ?`,
            [datos.descripcion,datos.fecha,datos.tipo_misa_id,datos.usuario_id, datos.id],
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
            `select m.id, m.descripcion, m.estado, m.fecha,m.tipo_misa_id,m.usuario_id,
                tm.tipo_misa
             from misa m
            inner join tipo_misa tm on m.tipo_misa_id=tm.id
            where m.id=?`,
            [misaId],
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