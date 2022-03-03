import React from 'react'
import { Button, Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Cookies from 'universal-cookie'
const cookies = new Cookies()

export const NavbarMenu = () => {

    const Cerrar = () => {
        cookies.remove('usuario', { path: '/' });
        window.location.href = './'
    }

    return (
        <Navbar bg="info" expand={false}>
            <Container fluid>
                <Navbar.Brand >
                    <h1 className='h1Navbar'>Prueba</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                >
                    <Offcanvas.Header>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <NavLink to='/menu' className='navLink'>
                                <Button className='navLink' variant="outline-primary">
                                    Menu
                                </Button>
                            </NavLink>
                            <div className='navLink'>
                                <Button
                                    className="justify-content-end flex-grow-1 pe-3 navLink"
                                    variant="outline-danger"
                                    onClick={() => { Cerrar() }}>
                                    Serrar Secion
                                </Button>
                            </div>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}
