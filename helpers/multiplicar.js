const fs = require("fs");
const colors = require("colors");
const { dirname } = require("path");

const crearArchivo = async (base, listar, limite) => {
  try {
    let data = "";
    for (let i = 1; i <= limite; i++) {
      data += `${base} x ${i} = ${base * i}\n`;
    }

    if (listar) {
      console.log(`
=====================
    tabla del ${base}:
=====================
`.rainbow);
      console.log(data.yellow);
    }

    nombreArchivo = `tabla-${base}.txt`;
    // Guardemos los archivos en el folder salida
    fs.writeFileSync('./salida/'+ nombreArchivo, data);
    return nombreArchivo;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
