import React from 'react'

const Title = () => {
  console.log("Rendering Title")
    return <h1>Use callback hook</h1>
  
}

export default React.memo(Title);