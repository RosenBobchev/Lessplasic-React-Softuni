import React, { Component } from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';

export class CreateEvent extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form>
                            <h1 className="text-center mt-3">Create Event</h1>
                            <Form.Group controlId="formGridName">
                                <Form.Label>Event Name</Form.Label>
                                <Form.Control placeholder="Name" />
                            </Form.Group>
                            <Form.Group controlId="formGridTowns">
                                <Form.Label>Towns</Form.Label>
                                <Form.Control placeholder="Town1, Town2, Town3.." />
                            </Form.Group>
                            <Form.Group controlId="formGridDescr">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows='5'  placeholder="Description" />
                            </Form.Group>
                            <Form.Group controlId="formGridDate">
                                <Form.Label>Date</Form.Label>
                                <Form.Control type="date" placeholder="Date"/>
                            </Form.Group>
                            <Form.Group className="text-center" id="formGridButton">
                                <Button className="text-center" variant="primary" type="submit">Create</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}
