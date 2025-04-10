let arr = "pradip";
let arr2 = [];
for(let i=arr.length-1;i>=0;i--){

    arr2[arr.length-i-1]=arr[i]

}




  let arr3 = [];

  for(let i=0;i<arr.length;i++){

      arr3[i]=arr[i];
      

 }
    for(let i=arr.length; i<arr.length*2; i++){
 
       arr3[i]=arr2[i-arr.length];
       
       
   }
 
   console.log(arr3);