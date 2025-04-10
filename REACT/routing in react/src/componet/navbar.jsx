import React from 'react'
import { NavLink } from 'react-router-dom'
const navbar = () => {
  return (
    <div>
   <NavLink  className={(e)=>{return  e.isActive?"red":""}} to="/"> <li>home</li></NavLink>
   <NavLink to="/about" className=""> <li>about</li></NavLink>
   <NavLink to="/contect" className=""><li>contect</li></NavLink>
  
   

    </div>
  )
}

export default navbar
