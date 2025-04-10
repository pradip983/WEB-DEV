const addItem = async (item)=>{
    await randomDelay();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.append(div);
}

const randomDelay = ()=>{
    return new Promise((resolve, reject)=>{
        timeout = 1 + 6*Math.random();
        setTimeout(()=>{
            resolve();
        },timeout*1000);
    })
}


async function main(){

    setInterval(()=>{
        let last = document.body.lastElementChild;
        if(last.innerHTML.endsWith("...")){

        }
        else{
            last.innerHTML = last.innerHTML + "."
        }
    },700);


let text = ["initializing Hacking noe reading your data",
    "reading your files",
    "password files detected",
    "sending all passwords and personal files to Server",
    "cleaning up"]

    for (const item of text){
       await addItem(item);
    }

}

main();