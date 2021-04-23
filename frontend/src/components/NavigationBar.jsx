import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from '@reach/router'

export class NavigationBar extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/home">Home</Link>
                        <Link to="/login">Login</Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>  
        )
    }
}

export default NavigationBar
