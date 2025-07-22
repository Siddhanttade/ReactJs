import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  let myobj = {
    name: "sid",
    age: 20,
    city: "delhi"
  }
  let newArr=[1,2,3]//we can also pass arrays as props
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl' >hello boy</h1> 
      <Card name="sid" btnText='hi' />
      <Card name="kun"  />
    </>
    
  )
}

export default App
