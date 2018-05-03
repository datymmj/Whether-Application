const request = require('request');

var weather = (lat,lng,callback) => {
    request({
        url:`https://api.darksky.net/forecast/350f70646d8e07c906590c7b3db464fa/${lat},${lng}`,
        json:true
    },(error,response,body) => {
        if(!error && response.statusCode === 200){
            callback(undefined,{
                temprature:body.currently.temperature,
                apparentTemprature:body.currently.apparentTemperature
            });
        }else{
            callback('Unable to fetch weather')
        }
    });
}

module.exports = weather;

