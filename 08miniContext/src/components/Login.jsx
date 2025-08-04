import React, {useState,useContext} from 'react'
import UserContext from '../context/userContext';

function Login() {
    const [username, setUserName] = useState(""); 
    const [password, setPassword] = useState("");
    const {setUser} = useContext(UserContext); //useContext hook is used to access the context value, in this case, setUser function
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password}); //setUser function is used to set the user state in the context provider
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text' value={username} onChange={(e)=>setUserName(e.target.value)} placeholder='username'/>
        {"  "} 
        <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password'/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login