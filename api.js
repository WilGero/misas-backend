const express = require('express');
const dotenv = require('dotenv').config()
const cors = require('cors');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.listen(process.env.PORT, () => {
    console.log('ya funciono!!!! en el puerto:', process.env.PORT);
});
app.get('/', (req, res) => {
    res.status(200).send('Bienvenido a la API');
});
app.put('/', (req, res) => {
    res.status(200).send('Bienvenido a la API put');
});
app.delete('/', (req, res) => {
    res.status(200).send('Bienvenido a la API delete');
});
app.post('/', (req, res) => {
    res.status(200).send('Bienvenido a la API post');
});
// ruta para usuarios
app.use('/usuarios', require('./routes/usuarios.js'));
// ruta para roles de usuario
app.use('/roles', require('./routes/roles.js'));
// ruta para tipos de misa
app.use('/tiposmisa', require('./routes/tipoMisas.js'));
// ruta para misas
app.use('/misas', require('./routes/misas.js'));
// ruta para tipos de intencion
app.use('/tiposintencion', require('./routes/tiposIntencion.js'));