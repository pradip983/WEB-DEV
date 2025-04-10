document.querySelector(".child").addEventListener("contextmenu", (e) => {
    e.stopPropagation()
    alert("child was clicked")
})

document.querySelector(".child-container").addEventListener("contextmenu", (e) => {
    e.stopPropagation()
    alert("childcontainer was clicked")
})

document.querySelector(".container").removeEventListener("contextmenu", (e) => {
    e.stopPropagation()
    alert("container was clicked")
})



// let a = setInterval(() => {
//     document.querySelector(".child-container").style.background = getrandomnum();
//     document.querySelector(".child").style.background = getrandomnum();
//     document.querySelector(".container").style.background = getrandomnum();
// }, 300);
// console.log(a);

let a = setTimeout(() => {
         document.querySelector(".child-container").style.background = getrandomnum();
         document.querySelector(".child").style.background = getrandomnum();
         document.querySelector(".container").style.background = getrandomnum();
     }, 1000);
     console.log(a);
    
function getrandomnum() {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);

    return `rgb(${val1},${val2},${val3})`
}