import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";

const Auth = createContext();

export const AuthProvider = ({children})=>{
       const[toggle, setToggle] = useState(false);
     
     return(
          <Auth.Provider value={{toggle, setToggle}}>
               {children}
          </Auth.Provider>
     )
}

export let useContextData = () =>useContext(Auth);