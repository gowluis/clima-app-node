const axios = require('axios');

const getLugarLatLog = async(dir) => {


    const encodeUlr = encodeURI(dir);
    //console.log(encodeUlr);


    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUlr}`,
        headers: { 'x-rapidapi-key': '8d9ab367b4mshc435281a2ade0e3p118740jsn59be7ddac132' }
    });


    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultado para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon;

    // .then(resp => {
    //     console.log(resp.data.Results[0]);
    // })
    // .catch(err => {
    //     console.log('ERORR!!!!!!! ', err);
    // });

    return {
        direccion,
        lat,
        lon
    }

}

module.exports = {
    getLugarLatLog
}