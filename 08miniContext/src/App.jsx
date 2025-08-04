
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/userContextProvider'

function App() {
  

  return (
    <UserContextProvider> {/* UserContextProvider is a context provider that will wrap the components that will use this context */}
      {/* this will provide the user context to the components that will use this context */}
      {/* it will provide the user state and setUser function to the components that will use this context */}
      <h1> hello</h1> 
      <Login/>
      <Profile />
    </UserContextProvider>
      
  )
}

export default App
