import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { NavMenu } from './Navbar/Navbar';
import { Footer } from './Footer/Footer';

export class Layout extends Component {

    render() {
        return (
            <Container style={{backgroundColor: 'white', padding: 0}}>
                    <NavMenu />
                        {this.props.children}
                    <Footer />
            </Container>
        );
    }
}
