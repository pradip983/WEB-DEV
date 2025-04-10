let a = prompt("enter frist number ");
let b = prompt("enter second number");

// if(isNaN(a) || isNaN(b)){
//     throw SyntaxError("not a number");
// }
// else{
// let sum = parseInt(a)+parseInt(b);
// console.log("sum is " + sum);
// }


let sum = parseInt(a) + parseInt(b);



function main() {

    let x = 10;
    try {

        console.log("sum is " + sum * x);
        return true;
    }
    catch (error) {
         console.log("x is not found");

        // throw SyntaxError("error a gaya bhai");

        return false;
    }

    // finally {
        console.log("data is not found");
    // }
}

let c = main();