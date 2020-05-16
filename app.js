const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


//console.log(argv.direccion);

// lugar.getLugarLatLog(argv.direccion)
//     .then(console.log);

// clima.getClima(40.75, -74)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {

    try {
        const coordenadas = await lugar.getLugarLatLog(direccion);
        const temp = await clima.getClima(coordenadas.lat, coordenadas.lon);
        return `El clima de ${coordenadas.direccion} es de ${temp}`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;

    }



    //salida
    //El clima de XX es de XX temperatura
    //no se pudo determinar el clima de X lugar

}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);