var aiwiPromise = new Promise((resolve,reject) => {
resolve(' Hey!! It worked!!');
reject(' Sorry man it didn\'t worked out ');
})

aiwiPromise.then((message) => {
 console.log('Success ',message);
}, (errorMessage) => {
    console.log('failure',errorMessage);
});