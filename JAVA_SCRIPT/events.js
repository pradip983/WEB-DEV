let button = document.getElementById("btn")

// button.addEventListener("dblclick", ()=>{
//     document.querySelector(".box").innerHTML = "<b> hay you already clicked</b>"
// })

//  button.addEventListener("contextmenu", ()=>{
//      alert("cont hack us by right click please");
//  })

   button.addEventListener("keydown", (e)=>{
     console.log(e,e.key,e.keyCode);
  })

