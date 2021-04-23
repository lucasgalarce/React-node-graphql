import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Login() {

  return (
      <div className="container ">
        <div className="row justify-content-center ">
          <div className="col-6">

            <Form>
              <Form.Group controlId="Email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" required />
              </Form.Group>

              <Form.Group controlId="Password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter Password" required />
              </Form.Group>

              <Button variant="primary" type="submit">
                  Login
              </Button>
            </Form>

          </div>
        </div>
      </div>
  )
}

export default Login;
