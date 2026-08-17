import React from 'react'
import LoginForm from '../../rr-auth/src/components/LoginForm'
import RegisterForm from '../../rr-auth/src/components/RegisterForm'
import { useState } from 'react'
import { useContextData } from './Context/AuthContext'

const App = () => {
    const { toggle } = useContextData();
  return (
    <div>

      {toggle?<LoginForm/>:<RegisterForm/>}
      
      
      
    </div>
  )
}

export default App
