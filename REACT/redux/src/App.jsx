import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from "./redux/counter/counteSlice"

function App() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        {count}
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </>
  )
}

export default App
