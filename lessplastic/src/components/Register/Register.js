import React, { Component } from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';

export class Register extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form>
                            <h1 className="text-center mt-3">Register</h1>
                            <Form.Group controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formGridNickname">
                                <Form.Label>Nickname</Form.Label>
                                <Form.Control placeholder="Username" />
                            </Form.Group>
                            <Form.Group controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control placeholder="Sozopol" />
                            </Form.Group>
                            <Form.Group className="text-center" id="formGridButton">
                                <Button className="text-center" variant="primary" type="submit">Submit</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}
