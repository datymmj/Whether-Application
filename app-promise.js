const yargs = require('yargs');
const  axios = require('axios');

const argv = yargs.options({
    a: {
        demand: true,
        string: true,
        alias: 'address',
        describe: 'Address to fetch whether for',
    }
})
    .help()
    .alias('help', 'h')
    .argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBJi6xLbJfYDcXYOaKLK04s5yjVuQSlaw0`; 

axios.get(geocodeUrl).then((response)=>{
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    console.log(response.data.results[0].formatted_address);
    var weatherUrl = `https://api.darksky.net/forecast/350f70646d8e07c906590c7b3db464fa/${lat},${lng}`;
    return axios.get(weatherUrl);
}).then((response) => {
    var temprature = response.data.currently.temperature;
    var apparentTemprature = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temprature}. But it feels like ${apparentTemprature}`);
}).catch((e)=>{
    console.log(e);
})



