import React, {useState} from 'react'

const App = ()=> {
  const [count, setCount] = useState(0)


  return (
    <div>
      count: {count}
    </div>
  );
}

export default App
