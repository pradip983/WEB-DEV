import React from 'react'
import { useEffect } from 'react'



const Navbar = (props) => {

  useEffect(() => {
    alert("app.jsx frist rander")
  
    return () => {
     alert("component is unmounted")
    }
  }, [])

 
  return (
    <div>
      <ul>
        <li>home {props.logotext}</li>
        <li>contact</li>
        <li>about</li>
      </ul>
    </div>
  )
}

export default Navbar
