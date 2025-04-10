let random = Math.random();
console.log(random);
let a = prompt("enter first number");
let c = prompt("enter operation");
let b = prompt("enter second number");



let obj1 = {
    "+" :"-",
    "*" :"+",
    "-" :"/",
    "/" :"**"
}

if(random > 0.1){
    
    console.log(`the result is ${a} ${c} ${b}`);
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`);
}

else{
   
    c = obj1[c];
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`);
}
