import { useState } from "react";
import Navbar from "./components/navbar";
import "./App.css"
import Footer from "./components/footer";
function App() {
  const [value, setvalue] = useState(0)


  return (
    <div className="App">
      <Navbar logotext="pradip"/>
      <Footer />
      <div className="value">{value}</div>
      <button onClick={() => { setvalue(value + 1) }}>click me</button>
      <Footer />
    </div>
  );
}

export default App;
