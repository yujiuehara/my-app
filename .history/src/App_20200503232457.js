import React, {useState} from 'react'

const App = ()=> {
  const [count, setCount] = useState(0)

  const increment = () => {
    return (
      setCount(count + 1)
    )
  }

  const decrement = () => {
    return (
      setCount(count - 1)
    )
  }

  const increment2 = () => {
    return (
      setCount(previousCount => previousCount + 1)
    )
  }
  
  const reset = () => {
    return(
      setCount(count - count)
    )
  }

  return (
    <>
    <div>count: {count}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    <div>
      <button onClick={increment2}>+1</button>
    </div>
    <div>
      <button onClick={reset}>Reset</button>
    </div>
    </>
  );
}

export default App
