import React from 'react'
import Password from '../components/Password'
import { Container } from "react-bootstrap"


function ForgotPassword() {
  return (
    <>
            
          <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}>
        
      <div className="w-100" style={{ maxWidth: "500px" }}>
      <Password />
      </div>
      </Container>  
      
    </>
  )
}

export default ForgotPassword