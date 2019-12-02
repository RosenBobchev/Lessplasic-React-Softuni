import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FaPhone, FaFacebookSquare, FaInstagram, FaCookieBite, FaInfoCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {FacebookProvider, Like} from "react-facebook";

export class Footer extends Component {

    render() {
        return (
            <footer style={{marginTop: '120px'}}>
                <div style={{background:'deepskyblue', color: 'white'}}>
                    <div>
                        <Row>
                            <Col>
                                <div>
                                    <h5 className="text-uppercase" style={{padding: '1rem'}}>Info</h5>
                                    <hr style={{margin: 0, borderColor: 'white'}}/>
                                    <ul>
                                        <li>
                                            <a href="/about" style={{color: 'white'}}><FaInfoCircle style={{color: 'white', marginBottom: '3px'}}/> About us</a>
                                        </li>
                                        <li>
                                            <a href="/privacy"  style={{color: 'white'}}><FaCookieBite style={{color: 'white', marginBottom: '3px'}}/> Cookies</a>
                                        </li>
                                        <li>
                                        <FacebookProvider appId="2661552967246067">
                                            <Like href="https://www.facebook.com/LessplasticBulgaria/" colorScheme={'dark'} showFaces={false} share />
                                        </FacebookProvider>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <h5 className="text-uppercase" style={{padding: '1rem'}}>Contact Us</h5>
                                    <hr style={{margin: 0, borderColor: 'white'}}/>
                                    <ul>
                                        <li>
                                            <a href="#!" style={{color: 'white'}}><FaPhone style={{color: 'white', marginBottom: '3px'}}/> +359 777 33 43 67</a>
                                        </li>
                                        <li>
                                            <a href="mailto:rbobchev@gmail.com" style={{color: 'white'}}><MdEmail style={{color: 'white', marginBottom: '3px'}}/> rbobchev93@gmail.com</a>
                                        </li>
                                        <li>
                                            <a target="_blank" rel="noopener noreferrer"
                                               href="https://www.facebook.com/LessplasticBulgaria/" style={{color: 'white'}}><FaFacebookSquare style={{color: 'white', marginBottom: '3px'}}/> Lessplastic Facebook</a>
                                        </li>
                                        <li>
                                            <a target="_blank" rel="noopener noreferrer"
                                               href="https://www.instagram.com/lessplastic_bulgaria/" style={{color: 'white'}}><FaInstagram style={{color: 'white', marginBottom: '3px'}}/> Lessplastic Instagram</a>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div style={{textAlign: 'center', paddingBottom: '10px'}}>&copy; CopyRight Lessplastic Bulgaria 2019. All rights reserved.</div>
                </div>
            </footer>
        );
    }
}
