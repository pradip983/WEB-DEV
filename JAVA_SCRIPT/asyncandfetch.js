// function getdata(){
// return new Promise((resolve , reject)=>{
//     setTimeout(() => {
//         resolve(455);
//     }, 10000);
// })

// }

 async function getdata(){
//    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1');


let x = await fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'post',
    body: JSON.stringify({
        title:'foo',
        body:'bar',
        userId:1,
    }),
    headers:{
        'content-type':'application/json; charset=UTF-8',
    },
});








let data = await x.json();

return data;


    
    }

console.log("loading module");

console.log('do something else');

console.log('load data');

async function main(){

let data = await getdata()

// data.then((v)=>{

// console.log(data);

// console.log('process data');

// console.log('task 2');

// })



 console.log(data);
    
 console.log('process data');
    
 console.log('task 2');
    
}

main();


    