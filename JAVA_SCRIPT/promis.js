
let prom1 = new Promise((resolve,reject) => {
    let a = Math.random();
    if(a < 0.5){
        reject("no random num was supported you")
    }
    else{
        setTimeout(() => {
            console.log('yes i am done');
            resolve("pradip");
            
        }, 3000);
    }
})

// let prom2 = new Promise((resolve,reject) => {
//     let a = Math.random();
//     if(a < 0.5){
//         reject("no random num was supported you 2")
//     }
//     else{
//         setTimeout(() => {
//             console.log('yes i am done 2');
//             resolve("pradip  2");
            
//         }, 2000);
//     }
// })



// prom1.then((a) => {
//    console.log(a);
// }).catch((err) => {
//     console.log(err);
    
// })

// // let prom3 = Promise.all([prom1,prom2])
// let prom3 = Promise.allSettled([prom1,prom2])
// let prom3 = Promise.race([prom1,prom2])

// prom3.then((a)=>{
//     console.log(a);
    
// }).catch((err) => {
//      console.log(err);
// });

