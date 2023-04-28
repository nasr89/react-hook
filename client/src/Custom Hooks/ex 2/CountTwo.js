import React from 'react'
import useCount from './useCount'
const CountTwo = () => {
    const [count,increment,decrement,reset] = useCount(2,2)
  return (
    <div>
        <h1>Count - {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CountTwo