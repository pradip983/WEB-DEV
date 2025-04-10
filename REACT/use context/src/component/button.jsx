import React, { useContext } from 'react'
import Componet from './componet'
import { counterContext } from '../context/context'


const button = () => {
    let value = useContext(counterContext);
  return (
   
    <div>
        <button onClick={() => value.setCount((count) => count + 1)}>Button</button>
      <Componet />

    </div>
  )
}

export default button
