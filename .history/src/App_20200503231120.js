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

  return (
    <>
    <div>count: {count}</div>
    <button onClick={increment}>+1</button>
    <button onClick={decrement}>-1</button>
    </>
  );
}

export default App
