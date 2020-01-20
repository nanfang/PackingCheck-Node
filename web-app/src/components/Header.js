import React from "react";
import { useAuth0 } from "../utils/react-auth0-spa";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

const _Greeting = () => {
    const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
    if (isAuthenticated)
        return (
            <NavDropdown title={user.given_name} id="basic-nav-dropdown">
                <LinkContainer to="/profile"><NavDropdown.Item>Profile</NavDropdown.Item></LinkContainer>
                <NavDropdown.Item onClick={() => logout({})}>Logout</NavDropdown.Item>
            </NavDropdown>)
    else
        return < button inline onClick={() => loginWithRedirect({})}> Log in</button >
}

const Header = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
            <Navbar.Brand>Packing Check</Navbar.Brand>
            <Nav className="mr-auto">
                <LinkContainer to="/">
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>
            </Nav>
            <Nav>
                <_Greeting />
            </Nav>

        </Navbar >
    );
};

export default Header;