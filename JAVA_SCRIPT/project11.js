let n = prompt("enter number");
let arr = []
for(let i=0; i<n; i++ ){
    arr[i]=i+1;
}
console.log(arr);

let red = (a,b)=>{
    return a*b;
}

console.log(arr.reduce(red));