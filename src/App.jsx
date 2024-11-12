
import React, {useState} from 'react'


function App() {

  const [counter, setCounter] = useState(0);

 // let counter = 15
const addValue =()=>{
  setCounter(counter+1)
}
const removeValue =()=>{
  setCounter(counter-1);
}

  return (
    <div>
      <h1>Kimani Mini project {counter}</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
      <p>footer{counter}</p>

     
    </div>
  )
}

export default App
