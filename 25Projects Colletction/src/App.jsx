import { useState } from 'react'
import './App.css'
import Accordian from './components/Accordian/Accordian'
import Star from './components/StarRating/Star'

function App() {
 

  return (
    <>
     {/* <Accordian></Accordian> */}

     <Star noOfStars={5}/>
    </>
  )
}

export default App
