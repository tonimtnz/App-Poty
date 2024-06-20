import { createContext, useState } from "react";

export const UserContext = createContext()

export function UserProvider({children}){

    
    const [user, setUser] = useState({});
    
        function logUserData(user){
            localStorage.setItem("LogedUser",JSON.stringify(user));
        }
    return(
        <UserContext.Provider value={{user, setUser, logUserData}}>
            {children}
        </UserContext.Provider>
    )
}