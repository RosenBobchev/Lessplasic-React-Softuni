import React, { Component } from 'react';
import {Container, Image} from 'react-bootstrap';
import NavMenu from './Navbar/Navbar';
import { Footer } from './Footer/Footer';
import logo from "../Images/78113639_530325201151086_7825822470811680768_n.png";

export class Layout extends Component {

    render() {
        return (
            <Container style={{backgroundColor: 'white', padding: 0, minHeight: '100vh'}}>
                <div style={{textAlign: 'center'}}>
                    <Image src={logo}  style={{width: '100%', maxHeight: '69px', maxWidth: '431px', height: 'auto', display: 'inline-box'}} />
                </div>
                    <NavMenu />
                        {this.props.children}
                    <Footer />
            </Container>
        );
    }
}
