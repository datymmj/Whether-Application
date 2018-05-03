console.log('Starting application');

var getUser = (id,callback) =>{
var user = {
    id,
    name:'Anubhav'
}
setTimeout(() => {
    callback(user);
},1000)

};

getUser(31,(user)=>{
    console.log(user);
});