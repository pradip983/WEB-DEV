// business name generator
let rand = Math.random();
if(rand < 0.33){
    first = "Crazy"

}
else if(rand <0.66 && rand >=0.33){
     first = "Amazing"
}

else{
      first = "fire"
}

rand = Math.random();
if(rand < 0.33){
    second = "Engine"

}
else if(rand <0.66 && rand >=0.33){
     second = "Foods"
}

else{
      second = "Garments"
}

rand = Math.random();
if(rand < 0.33){
    third = "Bros"

}
else if(rand <0.66 && rand >=0.33){
     third = "Limited"
}

else{
      third = "Hub"
}

console.log(`${first} ${second} ${third}`);

