import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './actions/index'

function App() {
  const [array, setArray] = useState([])
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  function addObject() {
    const additionalObject = {
      name: 'value',
    }
    setArray([...array, additionalObject])
  }

  return (
    <div className="App">
      <h1>Counter {counter} </h1>
      <button onClick={() => dispatch(increment(1))}>+</button>
      <button onClick={() => dispatch(decrement(1))}>-</button>
      <h2>Arrays</h2>
      <button onClick={addObject}>AddObject {array.length}</button>
    </div>
  )
}

export default App
