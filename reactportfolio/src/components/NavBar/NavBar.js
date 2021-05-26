import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
import './style.css';

function MyLinks(){
    return (
<Navbar className="navi" bg="dark" variant="dark">
    <Nav className="mx-auto">
        <Nav.Link><Link className="linkies" to="/">About Me</Link></Nav.Link>
        <Nav.Link><Link className="linkies" to="/projects">Projects</Link></Nav.Link>
        <Nav.Link><Link className="linkies" to="/contact">Contact Me</Link></Nav.Link>
        <Nav.Link><Link className="linkies" to="/skills">Skills & Technologies</Link></Nav.Link>
    </Nav>
</Navbar>
    )
}

export default MyLinks;