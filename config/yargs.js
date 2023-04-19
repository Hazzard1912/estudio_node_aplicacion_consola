/**
 * Aqui hacemos la configuracion de yargs de manera independiente
 * a nuestro archivo app. Separamos la logica.
 */

/**
 * Configurando nuestro argv:
 * Aqui creamos las banderas que vamos a poner a disposicion del usuario,
 * podemos configurar su alias, su nombre, el tipo de dato, si tiene valor
 * por defecto, podriamos verificarlo tambien. Todo esto lo debemos hacer
 * antes de ejecutar el comando final .argv;
 */
/**
 * Estas configuraciones deberian de ir en un archivo independiente:
 */
const argv = require("yargs")
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
})
.check( (argv, options) => {
    if (isNaN(argv.b)){
        throw 'La base tiene que ser un numero'
    }
    return true;
})
.option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla de multiplicar'
})
.option('x', {
    alias: 'limite',
    type: 'number',
    default: 10,
    describe: 'El limite al cual debe llegar la tabla de multiplicar'
})
.check( (argv) => {
    if( isNaN(argv.x)){
        throw 'El limite debe ser un numero';
    }
    return true;
})
.argv; //argv de yargs

/**
 * Mediante el argv de yargs, al nosotros crear las banderas de nuestra
 * aplicacion por ejemplo: node app --base=5, nos crea basicamente un
 * objero con la propiedad base cuyo valor numerico es 5.
 * Tambien podriamos definir que el valor no sea numerico sino string, y
 * mucho mas.
 */
/**
 * De modo que gracias a esto, nosotros podemos configurar aplicaciones
 * que trabajen directamente con la consola, de la misma manera que 
 * al nosotros instalar paquetes, podemos saber su versio con las flags
 * -v, nosotros en esta aplicacion estamos configurandola para que alguien
 * desde la consola, pueda darnos un valor mediante una bandera, en este
 * caso --base, y aqui la extraemos para hacer funcionar la app!
 */

/**
 * Ademas, gracias a haber instalado yargs, estara disponible automaticamente
 * el comando --help, que muestra todos los comandos disponibles, y el
 * comando --version que devuelve el numero de version de la app.
 */

// usualmente la parte de argv se exporta asi:
module.exports = argv;