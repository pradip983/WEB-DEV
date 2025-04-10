import React from 'react'
import "./casd.css"

const casd = (props) => {
  return (
    <div>
      <div className="card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQUQ6g6NjGqj3qncgsJGpxzzRrL_qDAc1qQ&s" alt=""/> 
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
      </div>
    </div>
  )
}

export default casd
