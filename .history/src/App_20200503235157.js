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
      setCount(0)
    )
  }

  const double = () => {
    return(
      setCount(count * 2)
    )
  }

  const triple = () => {
    return(
      setCount( previousCount => {
        if (previousCount % 3 === 0){
          return previousCount / 3
        } else{
          retrun previousCount
        }
      }
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
    <div>
      <button onClick={double}>x2</button>
      <button onClick={triple}>割る３だけ</button>
    </div>
    </>
  );
}

export default App
