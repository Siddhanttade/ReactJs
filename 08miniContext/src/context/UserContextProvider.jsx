import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => { //children prop allows us to pass components inside this provider
    //it is a generic name for the prop that contains the components that will be wrapped by this provider
    const [user, setUser] = React.useState(null); //initially user is null, it will be set to the user object when the user logs in
    return(
        <UserContext.Provider value={{user,setUser}}> {/* value prop is used to pass the state and functions to the components that will use this context */}
            {children} {/* this will render the components that are wrapped by this provider */}
        </UserContext.Provider>
    )
}

export default UserContextProvider;