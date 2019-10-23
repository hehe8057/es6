function getPromise(){
    let promise = new Promise(function(resolve,reject){
        setTimeout(()=>{
            let random = Math.random();
            if(random>0.5){
                resolve(random);
            } else {
                reject(random);
            }
        },1000)
    });
    return promise;
}
let promise = getPromise();
promise.then((result)=>{
    console.log("success",result);
},(error)=>{
    console.log("error",error);
})
