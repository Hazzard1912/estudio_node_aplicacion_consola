const { crearArchivo } = require("./helpers/multiplicar");
const argv = require('./config/yargs');
const colors = require("colors");

console.clear();

crearArchivo(argv.b, argv.l, argv.x)
    .then( nombreArchivo => console.log(`${nombreArchivo}`.magenta, 'creado'.green))
    .catch( err => console.log(err));
