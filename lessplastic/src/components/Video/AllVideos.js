import React, { Component } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Video from "./Video";
import {Container} from "react-bootstrap";
import Article from "../Article/Article";
import Event from "../Event/Event";

export default class AllVideos extends Component {

    render() {
        return (
            <Container>
                    <Row>
                        <Col md={6}>
                            <div style={{margin: '1rem'}}>
                                <Video />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div style={{margin: '1rem'}}>
                                <Video />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div style={{margin: '1rem'}}>
                                <Video />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div style={{margin: '1rem'}}>
                                <Video />
                            </div>
                        </Col>
                    </Row>
            </Container>

        )
    }
}
