import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//this is an example of over engineering because every time state changes the app renders again
// function App() {
//   const [value, setValue] = useState(1)
//   // const [multipliedValue, setmultipliedValue] = useState(1) solution follows
//   let multipliedVal = val * 5 // this is a derived state, it is calculated from val, so we don't need to store it in state
//   //as the app renders, it will always calculate the value of multVal based on val

//   const multbyFive = () => {
//     //setmultipliedValue(val * 5)
//     setValue(val+1)
//   }

  // return (
  //   <>
  //     {/* //task:take a main number and after clicking the button, it should show the get multiplied by a number  show main and mult val*/}
  //     <h1>Main val:{value}</h1>
  //     <button
  //     onClick={multbyFive}>
  //       Click to multiply by 5
  //     </button>
  //     <h2>Mult val:{multipliedValue}</h2>
  //   </>
  // )

  function App() {
  // const [value, setValue] = useState(1)
  const [value, setValue] = useState(
    {
      value:0
    }
  )
  console.log('App rendered',Math.random()); //app wil render twice becoz of react strict mode in production np

  const clicker = () => {
    //console.log('logged');// no rendering again
    //console.log(setValue(value +1)); // this will render the app again, becoz state is changing
    //console.log(setValue(1));//no change in value, so no re-rendering default value
    console.log(setValue(3));// this will render the app again, becoz state is changing but limited times
    console.log(
      {
      value:0
    }//rendering again would occur
    )
  }
  
  //for handling rendering issue we cant be dependent on value because it is an object, so we take actual value of value

  useEffect(() => {value.value}) 
  return (
    <>
    <h1>Main val:{value}</h1>
      <button
      onClick={clicker}>
        Click to multiply by 5
      </button>
        {/* <h2>Mult val:{multipliedValue}</h2> */}
    </>
  )  
}


export default App
