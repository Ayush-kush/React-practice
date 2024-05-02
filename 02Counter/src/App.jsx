import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [counter,setCounter] = useState(5)

  // let counter = 5

  const increaseValue = ()=>{
    setCounter(counter+1);
    console.log("value added",counter);
  }
  const decreaseValue = ()=>{
    
    setCounter(counter-1);
    console.log("value added",Math.random());
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value : {counter} </h2>
      <button
      onClick={increaseValue}
      >Increase value </button>
      <br />
      <button
      onClick={decreaseValue}
      >Decrease value</button>
    </>
  )
}

export default App
