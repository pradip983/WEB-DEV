import { useEffect, useState } from "react";
import Navbar from "./components/navbar"
import "./App.css"
import Footer from "./components/footer";
function App() {
  const [cards, setcards] = useState([])

  const fetchdata = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await a.json()
    setcards(data)
  }
  useEffect(() => {
    fetchdata();
  }, [])


  return (
    <>
      <div className="container">
        {cards.map((card)=>{
          return <div key={card.id} className="card">
            <h3>{card.title}</h3>
            <p>{card.body}</p>
          </div>
        })}
      </div>
    </>
  );
}



export default App;
