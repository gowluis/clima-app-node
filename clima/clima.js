const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=cba325fb05c09aca21f665bf6be1ec97&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}