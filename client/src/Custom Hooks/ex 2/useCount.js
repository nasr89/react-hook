import React, { useState } from 'react'

const useCount = (initialState, value) => {
    const [count,setCount] = useState(initialState);
    const increment = () => {
        setCount((prevCount)=> prevCount+value);
    }
    const decrement = () => {
        setCount((prevCount)=> prevCount-value);
    }
    const reset = () => {
        setCount(initialState);
    }
  return [count, increment,decrement,reset]
}

export default useCount