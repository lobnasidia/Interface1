import React from "react"
import { Form, Button, Card } from "react-bootstrap"
import { Link} from "react-router-dom"


export default function ForgotPassword() {
   

return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Password Reset</h2>
          <Form  >
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email"  required />
            </Form.Group>
            <Button  className="w-100" type="submit">
              Reset Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/login">Log In</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  )
}