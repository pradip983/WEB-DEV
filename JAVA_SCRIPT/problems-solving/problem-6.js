let arr = "PRAdip"

function chack(arr) {

    for (let i = 0; i <= arr.length; i++) {

       if(arr[i] == String.fromCharCode(97) || arr[i] == String.fromCharCode(101) || arr[i] == String.fromCharCode(105) || arr[i] ==String.fromCharCode(111) || arr[i] == String.fromCharCode(117) ){

        console.log("string lowercase contain vowels");

        return;

    }
    else if(arr[i] == String.fromCharCode(65) || arr[i] == String.fromCharCode(69) || arr[i] == String.fromCharCode(73) || arr[i] == String.fromCharCode(79) || arr[i] == String.fromCharCode(85) ){
        console.log("string uppercase contain vowels");

        return;
    }
    
    
} 
    console.log("string not contain vowels");
}

function main(){

    chack(arr);
}

main();