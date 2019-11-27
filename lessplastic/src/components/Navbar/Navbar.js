import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaHome, FaNewspaper, FaVideo, FaPoll, FaUserAlt } from "react-icons/fa";
import { MdEvent } from "react-icons/md";

export class NavMenu extends Component {

    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" style={{backgroundColor: 'deepskyblue'}}>
                    <Navbar.Brand href="/">Lessplastic</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/"><FaHome style={{color: 'white', marginBottom: '5px'}}/> Home</Nav.Link>
                            <Nav.Link href="#articles"><FaNewspaper style={{color: 'white', marginBottom: '3px'}}/> Articles</Nav.Link>
                            <Nav.Link href="#events"><MdEvent style={{color: 'white', marginBottom: '3px'}}/> Events</Nav.Link>
                            <Nav.Link href="#videos"><FaVideo style={{color: 'white', marginBottom: '3px'}}/> Videos</Nav.Link>
                            <Nav.Link href="#polls"><FaPoll style={{color: 'white', marginBottom: '3px'}}/> Polls</Nav.Link>
                            <NavDropdown title="User panel" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/createArticle">Create Article</NavDropdown.Item>
                                <NavDropdown.Item href="/createEvent">Create Event</NavDropdown.Item>
                                <NavDropdown.Item href="/createPoll">Create Poll</NavDropdown.Item>
                                <NavDropdown.Item href="/addVideo">Add Video</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/register">Register</Nav.Link>
                            <Nav.Link href="/user"><FaUserAlt style={{color: 'white', marginBottom: '3px'}}/> Welcome, username</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}
