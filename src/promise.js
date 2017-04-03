let myPromise=new Promise((resolve,reject)=>{
    setTimeout(function() {
         resolve('Good to go!');
    }, 1000); 
});

myPromise.then((res)=>{
    console.log(res);
});

let myPromise2=new Promise((resolve,reject)=>{
    setTimeout(function() {
        reject('Promise2 - the promising');
    }, 1000);
});

Promise.all([myPromise,myPromise2])
        .then((data)=>{
            console.log(data);
        })
        .catch((err)=>{
            console.log(err);
        });