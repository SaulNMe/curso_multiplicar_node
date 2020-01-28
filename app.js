const { argv } = require('./config/yargs');
const crypto = require('crypto');
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => { console.log(`Archivo creado: ${colors.green(archivo)}`); })
            .catch(err => console.log(err));

        break;
    default:
        console.log("Comando no reconocido".red)
        break;
};