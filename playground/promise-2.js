const request = require('request');

var geocodeAddress = (address) => {
return new Promise( (resolve,reject) => {
    
    var encodedAddress = encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBJi6xLbJfYDcXYOaKLK04s5yjVuQSlaw0`,
        json: true
    }, (error, response, body) => {

        if (error) {
            reject('Unable to connect to the google servers');

        } else if (body.status === 'ZERO_RESULTS') {
            reject('Unable to find that address');

        } else if (body.status === 'OK') {
            resolve({
                    address: body.results[0].formatted_address,
                    Latitude: body.results[0].geometry.location.lat,
                    Longitude: body.results[0].geometry.location.lng

            });
        }
    });
});
};

geocodeAddress('Indore').then((location)=>{
console.log(JSON.stringify(location,undefined,2));
},(errorMessage) => {
    console.log(errorMessage);
})