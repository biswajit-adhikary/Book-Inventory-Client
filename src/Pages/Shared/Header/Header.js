import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../Firebase/Firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar bg="light" expand="lg" sticky="top" className='py-3'>
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        Book Inventory
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink
                                className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} to="/">Home
                            </NavLink>
                            {
                                user
                                    ?
                                    <Button onClick={handleSignOut} className="btn theme-btn-two">Sign Out</Button>
                                    :
                                    <NavLink
                                        className="btn theme-btn" to="/login">Log in
                                    </NavLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;