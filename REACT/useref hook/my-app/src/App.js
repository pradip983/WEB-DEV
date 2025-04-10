import { useEffect, useState, useRef } from "react";
import Navbar from "./components/navbar"
import "./App.css"
import Footer from "./components/footer";
function App() {
  const [value, setvalue] = useState(0)//hooks and value is state
    
const a = useRef(0)
const btnref = useRef()

useEffect(() => {
  a.current = a.current + 1;
  console.log(`${a.current}`);
  btnref.current.style.background = "orange"
},)

  return (
    <div className="App"> 
     <Navbar logotext="pradip"/> 
      <Footer />
      <div className="value">{value}</div>
      <button ref={btnref} onClick={() => { setvalue(value + 1) }}>click me</button>
      <Footer />
    </div>
  );
}

export default App;
