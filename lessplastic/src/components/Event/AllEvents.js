import React, { Component } from 'react';
import Event from "./Event";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class AllEvents extends Component {

    render() {
        return (
            <div>
                <Row>
                    <Col md={6}>
                        <div style={{margin: '1rem'}}>
                            <Event />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div style={{margin: '1rem'}}>
                            <Event />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div style={{margin: '1rem'}}>
                            <Event />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div style={{margin: '1rem'}}>
                            <Event />
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
