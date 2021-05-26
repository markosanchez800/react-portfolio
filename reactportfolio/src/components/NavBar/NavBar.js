import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './style.css';

function MyLinks(){
    return (
<Navbar className="navi" bg="dark" variant="dark">
    <Nav className="mx-auto">
        <Nav.Link href="/">About Me</Nav.Link>
        <Nav.Link href="/projects">Projects</Nav.Link>
        <Nav.Link href="/contact">Contact Me</Nav.Link>
    </Nav>
</Navbar>
    )
}

export default MyLinks;