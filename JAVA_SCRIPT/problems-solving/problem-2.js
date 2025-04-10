let arr = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9];
let arr2 = [];


for (let i = 0; i < arr.length; i++) {



    if (arr[i] != arr[i + 1]) {

        for (let j = 0; j < 2; j++) {

            arr2[j + i + i] = arr[i];

        }
    }
    else {
        arr2[i*2]=arr[i];
         


    }



}



// for(let i=0;i<arr2.length;i++){
//     arr[i]=arr2[i];
// }

console.log(arr2);
