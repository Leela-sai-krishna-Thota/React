import React from 'react'
import { useState } from 'react'

const Click = () => {
    const [count, setCount] = useState(0);

    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        if(count > 0)
        setCount(count-1)
    }
    const reset=()=>{
        setCount(0)
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>alert('hii')}>clickMe</button>
      <button onClick={decrement}>decre</button>
      <button onClick={reset}>Reset</button>
     
    </div>
  )
}

export default Click
