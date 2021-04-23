import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const UserForm = () => {
    return (
        <div className="container ">
            <div className="row justify-content-center ">
                <div className="col-6">

                    <Form>
                        <Form.Group controlId="Email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group controlId="Name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" required />
                        </Form.Group>

                        <Form.Group controlId="Password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" required />
                        </Form.Group>

                        <Form.Group controlId="RepeatPassword">
                            <Form.Label>Repeat password</Form.Label>
                            <Form.Control type="password" placeholder="Repeat password" required />
                        </Form.Group>

                        <Form.Group>
                            <Form.File id="File" label="Optional CV" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Save
                        </Button>
                    </Form>

                </div>
            </div>
        </div>
    )
}

export default UserForm;
