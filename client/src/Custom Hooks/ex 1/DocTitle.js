import React, { useState } from 'react'
import useDocTitle from './useDocTitle';

const DocTitle = () => {
    const [count, setCount] = useState(0);
    useDocTitle(count);
  return (
    <div>
        <button onClick={() => setCount(count+1)}>Increment</button>
    </div>
  )
}

export default DocTitle