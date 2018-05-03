const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

    geocode(argv.address,(errorMessage,results) => {
        if(errorMessage){
            console.log(errorMessage);
        }else {
            console.log(results.address);
            weather(results.Latitude,results.Longitude,(errorMessage,weatherResults) => {
                if(errorMessage){
                    console.log(errorMessage)
                }else{
                    console.log(`It's currently ${weatherResults.temprature}. But it feels like ${weatherResults.apparentTemprature}`);
                }
                });
        }
    });


