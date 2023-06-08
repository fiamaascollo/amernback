const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT;
require('./conexion/conexion')
const Usuario = require('./model/userModel');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`<h1>Soy el back del MERN</h1>`)
})

app.post('/usuarios', async (req, res) => {
    console.log(req.body);
    const { nombre, apellido, email, password } = req.body;

    console.log(`Mi nombre es ${nombre} ${apellido}, mi email es ${email} y mi password es ${password}`);

    const nuevoUsuario = new Usuario(req.body);

    console.log(`Nuevo usuario a guardar: ${nuevoUsuario}`);

    await nuevoUsuario.save();

    /* res.json({
        msg: 'Usuario creado correctamente'
    }); */
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
}) 
