import React, {useState} from 'react'

const App = (props)　=> {
  const [state, setState] = useState(props)
  const [price, setPrice] = useState(props.price)

  const reset = () => {
    setState(props)
  }

  return (
    <>
      <p>現在の{state.name}は、{state.price}円です。</p>
      <button onClick={()=>setPrice(price + 1)}>+1</button>
      <button onClick={()=>setPrice(price - 1)}>-1</button>
      <button onClick={reset}>Reset</button>
      <input value={state.name} onChange={(e) => setName(e.target.value)}/>
    </>
  );
}

App.defaultProps = {
  name: '',
  price: 1000
}

export default App
