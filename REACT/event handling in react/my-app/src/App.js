import { useEffect, useState, useRef } from "react";
import Navbar from "./components/navbar"
import "./App.css"
import Footer from "./components/footer";
function App() {
  const [value, setvalue] = useState(0)//hooks and value is state
 const [Form, setForm] = useState({email: "",phon: ""})
  const handleclick = ()=>{
    alert("hay i am pradip")
  }

  // const handleclick2 = ()=>{
  //   alert("hay i am rohit")
  // }

  const handlechange3 = (e)=>{
   setForm({...Form, [e.target.name]:e.target.value})
  }

  return (
    <>
     
    <div className="button">
      <button onClick={handleclick}>click me</button>
    </div>


    {/* <div className="red">
      <button onMouseOver={handleclick2}>click me</button>
    </div> */}

    <input type="text" name="email" value={Form.email} onChange={handlechange3} />
    <input type="text" name="phon" value={Form.phon} onChange={handlechange3} />
  
     
    </>
  )
};


export default App;
