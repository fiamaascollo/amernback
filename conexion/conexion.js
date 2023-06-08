const mongoose = require('mongoose');
require('dotenv').config();

const MONGOLOCAL = process.env.MONGOLOCAL;
const MONGOATLAS = process.env.MONGOATLAS;

//Conexion a la database de Mongo
mongoose.connect(MONGOATLAS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=> {
        console.log('Database conectado a Local/Atlas');
    })
    .catch((error) => {
        console.log(`El error es ${error}`);
    })