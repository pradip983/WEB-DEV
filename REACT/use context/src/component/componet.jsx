import React, { useContext } from 'react'

import { counterContext } from '../context/context'

const componet = () => {

    let value = useContext(counterContext);
  return (
    <div>
    {value.count}
    </div>
  )
}

export default componet
