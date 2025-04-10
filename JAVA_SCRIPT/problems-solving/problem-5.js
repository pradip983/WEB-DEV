let arr = [1,2,3,4,-5,6];

function sum(arr){
  let sum = 0;
    for(let i=0; i<arr.length;i++){

        if(arr[i] < 0){
            break;
        }
        else{
         sum = sum+arr[i];
        }
    }

    return sum;
}

let n = sum(arr);
console.log(n);