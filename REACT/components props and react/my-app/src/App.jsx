import React from "react";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Casd from "./components/casd.jsx";
import "./App.css"
function App() {

  return (
   <>
   
   <Navbar/>
   <div className="card1"  style={{background : "green"}}>
   <Casd title="pradip" desc="learn web dev"/>
   <Casd title="pradip" desc="learn web dev"/>
   <Casd title="pradip" desc="learn web dev"/>
   <Casd title="pradip" desc="learn web dev"/>
   <Casd title="pradip" desc="learn web dev"/>
   
   </div>
   <Footer/>
       
   </>
  );
}

export default App;
