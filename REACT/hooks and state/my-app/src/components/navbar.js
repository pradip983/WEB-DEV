import React from 'react'

const navbar = (props) => {
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

export default navbar
