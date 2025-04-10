"use client"

export default function Home() {

  const handelclick = async ()=>{
    console.log("yes1")
let data = {
  name:"pradip",
  role:"coder"
}

    let a  = await fetch("/api", {method:"POST",  headers: {
      'Content-Type': 'application/json',
    },
    
    body: JSON.stringify(data),
   
  })
  console.log("yes2")
    let res = await a.json()
      console.log(res)
    
  }
  
  return (
    <div>
      <h1>next.js api demo</h1>

      <button onClick={handelclick}>click me</button>
    </div>
  );
}
