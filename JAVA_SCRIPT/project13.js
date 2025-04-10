function creatCard(title, cName, views, monthsOld,duration,thumnail) {
   let viewNum
   if (views < 10000) {
      viewNum = views / 1000 + "K";
   }
   else if (views > 1000000) {
      viewNum = views / 1000000 + "M";
   }
   else {
      viewNum = views / 1000 + "k";
   }

   let html = `<div class="card">
   <div class="image">
       <img src="${thumnail}">
       <div class="capsule">${duration}</div>
   </div>
   <div class="text">
       <h1>${title}</h1>
       <p>${cName} . ${viewNum} views . ${monthsOld} month ago</p>
   </div>
</div>`



document.querySelector(".container").innerHTML = html 

}


creatCard(" Inroduction to Backend | Sigma Web Dev video #2", "CodeWitnHarry","56000","7","31.22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ");