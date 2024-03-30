const coneccion = require("../../database");
module.exports = {
    listado: callBack => {
        coneccion.query(
            `select * from catecumeno;`,
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
            `insert into catecumeno (nombres,apellidos,ci,fecha_nacimiento,celular,celular2,direccion,padrinos,usuario_id) 
            values (?, ? , ? , ?,?,?,?,?,?)`,
            [datos.nombres,datos.apellidos, datos.ci, datos.fecha_nacimiento, 
                datos.celular,datos.celular2,datos.direccion,datos.padrinos,datos.usuario_id],
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
            `delete from catecumeno where id=?`,
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
            `update catecumeno set nombres=?,apellidos=?,ci=?,fecha_nacimiento=?,celular=?,celular2=?,direccion=?,
            padrinos=?,usuario_id = ? where id = ?`,
            [datos.nombres,datos.apellidos, datos.ci, datos.fecha_nacimiento, 
                datos.celular,datos.celular2,datos.direccion,datos.padrinos,datos.usuario_id,datos.id],
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
            `select * from catecumeno 
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