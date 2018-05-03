const request = require('request');

var geocode = (address, callback) => {

    var encodedAddress = encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBJi6xLbJfYDcXYOaKLK04s5yjVuQSlaw0`,
        json: true
    }, (error, response, body) => {
        // console.log(JSON.stringify(response,undefined,2));
        if (error) {
            callback('Unable to connect to the google servers');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find that address');
        } else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                Latitude: body.results[0].geometry.location.lat,
                Longitude: body.results[0].geometry.location.lng
            })
        }
    });
}

module.exports = geocode;