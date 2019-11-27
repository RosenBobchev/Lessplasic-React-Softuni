import React, { Component } from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';

export class CreatePoll extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form>
                            <h1 className="text-center mt-3">Create Poll</h1>
                            <Form.Group controlId="formGridQuestion">
                                <Form.Label>Question</Form.Label>
                                <Form.Control placeholder="Question" />
                            </Form.Group>
                            <Form.Group controlId="formGridAnswers">
                                <Form.Label>Answers</Form.Label>
                                <Form.Control placeholder="Yes, No, Maybe" />
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
