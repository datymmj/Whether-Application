// var aiwiPromise = new Promise((resolve,reject) => {
// resolve(' Hey!! It worked!!');
// reject(' Sorry man it didn\'t worked out ');
// })

// aiwiPromise.then((message) => {
//  console.log('Success ',message);
// }, (errorMessage) => {
//     console.log('failure',errorMessage);
// });

var asyncAdd = (a,b) => {
    return new Promise((resolve,reject)=>{
        if(typeof a === 'number' && typeof b === 'number')
            resolve(a+b);
        else
            reject('Arguments must be numbers');
    });
}

// asyncAdd(5,9).then((result)=>{
//     console.log(result);
//     return asyncAdd(result,20);
// },(errorMessage)=>{
//     console.log(errorMessage);
// }).then((result)=>{
//     console.log(result);
// },(errorMessage)=>{
//     console.log(errorMessage);
// });


asyncAdd(5,9).then((result)=>{
    console.log(result);
    return asyncAdd(result,20);
}).then((result)=>{
    console.log(result);
}).catch((errorMessage) =>{
    console.log(errorMessage);
})