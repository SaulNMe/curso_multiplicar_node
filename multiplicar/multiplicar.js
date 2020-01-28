const fs = require('fs');
const colors = require('colors/safe');

let listarTabla = (base, limite) => {
    console.log(colors.green("======================="));
    console.log(colors.green(`====== tabla de ${base} ======`));
    console.log(colors.green("======================="));
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} x ${i} = ${i*base}\n`);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${i*base}\n`;
        };

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}-al-${limite}.txt`);
        });

    });
};

module.exports = {
    crearArchivo,
    listarTabla
};