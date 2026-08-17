import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";

const Auth = createContext();

export const AuthProvider = ({children})=>{
       const[toggle, setToggle] = useState(false);

        const [registeredUser, setRegisteredUser] = useState(
    JSON.parse(localStorage.getItem("registeredUsers")) || []
  );
     
     return(
          <Auth.Provider value={{toggle, setToggle, registeredUser, setRegisteredUser}}>
               {children}
          </Auth.Provider>
     )
}

export let useContextData = () =>useContext(Auth);