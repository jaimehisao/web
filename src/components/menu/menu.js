import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar } from "react-bootstrap"
import { Container } from "react-bootstrap"
import { Nav } from "react-bootstrap"
import { NavDropdown } from "react-bootstrap"
import { Button } from "react-bootstrap"

class Menu extends Component {
    render() {
        return (
            <div>
                <Navbar variant="dark" bg="dark">
                    <Container fluid>
                        <Navbar.Brand>
                            Mini Clip Games
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbar-dark-example" />
                        <Navbar.Collapse id="navbar-dark-example">
                            <Nav>
                                <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Menu"
                                    menuVariant="info">
                                    <Button variant="primary">A button!</Button>{' '}
                                    <NavDropdown.Item>Youtube</NavDropdown.Item>
                                    <NavDropdown.Item>Netflix</NavDropdown.Item>
                                    <NavDropdown.Item>Prime</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default Menu