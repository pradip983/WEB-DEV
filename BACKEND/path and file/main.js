const { error } = require("console");
const fs = require("fs")

console.log(fs);
console.log("starting")
// fs.writeFileSync("pradip.txt", "pradip is good boy");
fs.writeFile("pradip2.txt" , "pradip is good boy" ,()=>{
    console.log("done");
    fs.readFile("pradip2.txt",(error,data)=>{
        console.log(error,data.toString())
    } )
})
fs.appendFile("pradip2.txt","clever",(e,d)=>{
    console.log(d)
})
console.log("ending");

