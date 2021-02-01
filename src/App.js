import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './actions/index'

function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  console.log()
  return (
    <div className="App">
      <h1>Counter {counter} </h1>
      <button onClick={() => dispatch(increment(2))}>+</button>
      <button onClick={() => dispatch(decrement(2))}>-</button>
    </div>
  )
}

export default App
