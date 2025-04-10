//  "use client"
import fs from "fs/promises"
// import { useState } from "react";



export default function Home() {
  // const [count, setcount] = useState(0)
  console.log("hay i am pradip")

  let a = fs.readFile(".gitignore")
  a.then(e=>{console.log(e.toString())})
  return (
   <div>
    i am a component
    {/* <button onClick={()=>setcount(count + 1)}> click me</button> */}
    {/* {count} */}
   </div>
  );
}
