console.log("hay i am pradip");
console.log("i am learn web dev");


// setInterval((e) => {
//     console.log("frist")
// },3000);


// setInterval((e) => {
//     console.log("second")
// },2000);


// callback function

// function greet(name,callback){
//     console.log(`hello, ${name}!`);
//     callback();
// }

// greet(`john`,function(){
//     console.log(`callback function execute`);
// })

function loadscript(src, callback) {
    let script = document.createElement(`script`)
    script.src = src
    document.head.append(script)
    callback();
}


loadscript(`https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js`,function () {
    alert(`script loaded`);
    console.log("end");
});