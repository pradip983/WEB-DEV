import { useEffect, useState, useRef } from "react";
import Navbar from "./components/navbar"
import "./App.css"
import Footer from "./components/footer";
function App() {
  const [value, setvalue] = useState(0)//hooks and value is state
  const [btn ,setbtn] = useState(true)
  const [todos, settodos] = useState([
    {
      title:"hay",
      desc:"i am a todo"
    },
    {
      title:"hii",
      desc:"i am another todo"
    }
  ])

 
  
  // const Todo = ({todo}) => {
  //   return (<>
  //     <div>{todo.title}</div>
  //     <div>{todo.desc}</div>
       
  //     </>
  //   )
  // }

  

  return (
    <div className="App"> 
     <Navbar logotext="pradip"/> 
    {btn?<button>show when i am true</button>:""}
    {/* {btn && <button>show when i am true</button>} */}
      <Footer />
    {todos.map(todo=>{
      // return <Todo key={todo.title} todo={todo} />
      return (<> 
        <div >{todo.title}</div>
        <div >{todo.desc}</div>
       
        </>
      )
    })}
      <div className="value">{value}</div>
      <button onClick={() => setbtn(!btn)}>click me</button>
      <Footer />
    </div>
  );
}

export default App;
