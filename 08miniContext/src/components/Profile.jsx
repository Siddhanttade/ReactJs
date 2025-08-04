import React, {useContext} from 'react'
import UserContext from '../context/userContext';

function Profile() {
  const {user}=useContext(UserContext); //useContext hook is used to access the context value, in this case, user object
  if (!user) return <div>Please log in to see your profile.</div>; //if user is null, show this message
  return <div>welcome {user.username}</div>
}

export default Profile 