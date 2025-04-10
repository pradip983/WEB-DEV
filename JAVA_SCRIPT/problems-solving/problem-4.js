let pass = "PRAdip45"

function chack(pass) {

    for (let i = 0; i <= pass.length; i++) {

        for (let c = 65; c <= 90; c++) {
            let b = String.fromCharCode(c)
            if (b == pass[i]) {
               return b;
            }
           
        }
    }
        console.log("please enter uppercase digit");
}

function chack2(pass) {

    for (let i = 0; i <= pass.length; i++) {

        for (let c = 97; c <= 122; c++) {
            let b = String.fromCharCode(c)
            if (b == pass[i]) {
               return b;
            }
           
        }
    }
        console.log("please enter lowercase digit");
}

function chack3(pass) {

    for (let i = 0; i <= pass.length; i++) {

        for (let c = 48; c <= 57; c++) {
            let b = String.fromCharCode(c)
            if (b == pass[i]) {
               return b;
            }
           
        }
    }
        console.log("please enter one digit");
}

function main(){



if(pass.length != 8){
   console.log("please enter 8 digit password");
}
else{
chack(pass);
chack2(pass);
chack3(pass);
}
    
    
}

main();