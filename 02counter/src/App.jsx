import {useState} from 'react'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(15) // It can also be const
  // let counter = 15
  
  const addValue = () => {
    if(counter < 20){
      setCounter(counter + 1)
      console.log("New Value after increasing: ", counter + 1)
    }
  }

  const removeValue = () => {
    if(counter > 0) {
      setCounter(counter - 1)
      console.log("New Value after decreasing: ", counter - 1)
    }
  }



  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button 
      onClick={addValue}>
      Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
