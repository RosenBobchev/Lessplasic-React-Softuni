import React, { Component } from 'react';
import CarouselComponent from "../Utils/Carousel";
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Article from "../Article/Article";
import Event from "../Event/Event";
import PollDetails from "../Poll/Poll";
import Video from "../Video/Video";
import {FacebookProvider, Page} from 'react-facebook';

export class Home extends Component {

    render() {
        const articles = [{id: 1, image: 'https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80', title: 'First Article', description: 'Description for First Article'},
            {id: 2, image: 'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg', title: 'Second Article', description: 'Description for Second Article'},
            {id: 3, image: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', title: 'Third Article', description: 'Description for Third Article'}];

        return (
            <Container>
                    <h1 style={{textAlign: 'center', margin: '1rem'}}>Welcome to Lessplastic!</h1>
                <Row>
                    <Col md={8}>
                        <div style={{width: '100%', maxHeight: '400px', maxWidth: '700px', height: 'auto'}}>
                            <CarouselComponent articles={articles}/>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div style={{width: '100%', maxHeight: '500px', maxWidth: '500px', height: '500px', marginTop: '10px', marginBottom: '10px'}}>
                            <FacebookProvider appId="2661552967246067">
                                <Page href="https://www.facebook.com/LessplasticBulgaria/" tabs="timeline" />
                            </FacebookProvider>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div>
                           <Article />
                        </div>
                    </Col>

                    <Col md={4}>
                        <div>
                            <Article />
                        </div>
                    </Col>

                    <Col md={4} style={{marginTop: '10px'}}>
                        <iframe src='https://www.juicer.io/api/feeds/rosenbobchev/iframe' frameBorder='0' style={{width: '100%', maxHeight: '500px', maxWidth: '340', height: '500px', }}/>
                    </Col>

                    <Col md={4}>
                        <div style={{marginTop: '1rem'}}>
                            <Event />
                        </div>
                    </Col>

                    <Col md={4}>
                        <div style={{marginTop: '1rem'}}>
                            <Event />
                        </div>
                    </Col>

                    <Col md={4}>
                        <div>
                            <PollDetails />
                        </div>
                    </Col>

                    <Col md={6}>
                        <div style={{marginTop: '1rem'}}>
                           <Video />
                        </div>
                    </Col>

                    <Col md={6}>
                        <div style={{marginTop: '1rem'}}>
                            <Video />
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}
