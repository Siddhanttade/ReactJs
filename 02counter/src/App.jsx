import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter=5;

  let [counter, setCounter] = useState(5);// useState is a hook that allows us to add state to functional components it takes default value as an argument and returns an array with two elements: the current state value and a function to update it.
  const addValue = () => {
    if (counter < 10) { // if counter is less than 10 then we can add value
    setCounter(counter + 1);
    }else{
      alert("counter can't be greater than 10");
    }
  }
  const remValue = () => {
    if (counter > 0) {    // if counter is greater than 0 then we can remove value
    setCounter(counter - 1);
    }else{
      alert("counter can't be less than 0");
    }
  }
  return (
    <>
        <h1>playing with react</h1>
        <h2>counter value:{counter}</h2>
        {/* here we are passing only reference of the function becouse we don't want to call it immediately */}
        <button onClick={addValue} >add value {counter}</button> 
        <br />
        <button onClick={remValue}>remove value {counter}</button>
        <p>footer:{counter}</p>
    </>
  )
}

export default App
