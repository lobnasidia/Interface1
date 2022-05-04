import React from 'react'
import LogIn from '../components/Login'
import { Container } from "react-bootstrap"


function LoginPage ()  {
  return (
    <>
           
          <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}>
        
      <div className="w-100" style={{ maxWidth: "500px" }}>
      <LogIn />
      </div>
      </Container>  
      
        
    </>
  )
}

export default LoginPage