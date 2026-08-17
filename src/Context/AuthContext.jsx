import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";

const Auth = createContext();

export const AuthProvider = ({children})=>{
       const[toggle, setToggle] = useState(false);

        const [registeredUser, setRegisteredUser] = useState(
    JSON.parse(localStorage.getItem("registeredUsers")) || []
  );

     const [logedInUser, setLogedInUser] = useState(
          JSON.parse(localStorage.getItem("logedInUser")) || null
     );
     
     return(
          <Auth.Provider value={{toggle, setToggle, registeredUser, setRegisteredUser, logedInUser, setLogedInUser}}>
               {children}
          </Auth.Provider>
     )
}

export let useContextData = () =>useContext(Auth);