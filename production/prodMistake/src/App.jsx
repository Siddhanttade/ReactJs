import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false) //here in case of false,undefined,null,"",no value output will be same for both
  //if we give 0,NaN "&&" operator fails on initial render in this case we can give !!isLoggedIn as a solution
  //[] directly renders the value so we need to use isLoggedIn.length>0

  return (
    <div style={padding="2rem"}>
      <h1>hi</h1>
      <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>
        Toggle Login
      </button>

    <div>
      <h3>&& operator</h3>
      {isLoggedIn && <p>You are logged in</p>}
    </div>
    <div>
      <h3>ternary operator</h3>
      {isLoggedIn? <p>You are not logged in</p>: <p>plz logged in</p>}
    </div>
    </div>
  )
}

export default App
