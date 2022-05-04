import React from 'react'
import SignUp from '../components/Signup'
import { Container } from "react-bootstrap"


function SignupPage() {
  return (
    <>
      
          <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}>
        
      <div className="w-100" style={{ maxWidth: "500px" }}>
      <SignUp />
      </div>
      </Container>  
 
    </>
  )
}

export default SignupPage