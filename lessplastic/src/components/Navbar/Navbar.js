import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaHome, FaNewspaper, FaVideo, FaPoll, FaUserAlt } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import authService from "../../services/authService";
import { withRouter } from 'react-router-dom';


class NavMenu extends Component {

    constructor(props){
        super(props);
    }

    logout = () => {
        authService.logout()
            .then(() => {
                sessionStorage.removeItem('authtoken');
                sessionStorage.removeItem('username');
                sessionStorage.removeItem('userId');
                this.props.history.push('/')
            });
    };

    render() {

        const navBar = authService.isAuth() ? (
            <NavDropdown title="User panel" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/createArticle">Create Article</NavDropdown.Item>
                <NavDropdown.Item href="/createEvent">Create Event</NavDropdown.Item>
                <NavDropdown.Item href="/createPoll">Create Poll</NavDropdown.Item>
                <NavDropdown.Item href="/addVideo">Add Video</NavDropdown.Item>
            </NavDropdown>) : null;

        const userBtns = authService.isAuth() ? (
            <Nav variant="tabs">
                <Nav.Link href="/user"><FaUserAlt style={{color: 'deepskyblue', marginBottom: '3px'}}/> Welcome, {sessionStorage.getItem('username')}</Nav.Link>
                <Nav.Link onClick={this.logout}><IoIosLogOut style={{color: 'deepskyblue', marginBottom: '3px'}}/> Logout</Nav.Link>
            </Nav>) : (
            <Nav variant="tabs">
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
            </Nav>);

        return (
            <div>
                <Navbar collapseOnSelect expand="lg" variant="light" sticky="top" style={{backgroundColor: 'transparent'}}>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto" variant="tabs">
                                <Nav.Link href="/"><FaHome style={{color: 'deepskyblue', marginBottom: '5px'}}/> Home</Nav.Link>
                                <Nav.Link href="/articles"><FaNewspaper style={{color: 'deepskyblue', marginBottom: '3px'}}/> Articles</Nav.Link>
                                <Nav.Link href="/events"><MdEvent style={{color: 'deepskyblue', marginBottom: '3px'}}/> Events</Nav.Link>
                                <Nav.Link href="/videos"><FaVideo style={{color: 'deepskyblue', marginBottom: '3px'}}/> Videos</Nav.Link>
                                <Nav.Link href="/polls"><FaPoll style={{color: 'deepskyblue', marginBottom: '3px'}}/> Polls</Nav.Link>
                                {navBar}
                            </Nav>
                        {userBtns}
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default withRouter(NavMenu)
