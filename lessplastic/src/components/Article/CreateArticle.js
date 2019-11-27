import React, { Component } from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';

export class CreateArticle extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form>
                            <h1 className="text-center mt-3">Create Article</h1>
                            <Form.Group controlId="formGridTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control placeholder="Title" />
                            </Form.Group>
                            <Form.Group controlId="formGridImg">
                                <Form.Label>Article Image</Form.Label>
                                <Form.Control placeholder="Image url" />
                            </Form.Group>
                            <Form.Group controlId="formGridContent">
                                <Form.Label>Content</Form.Label>
                                <Form.Control as="textarea" rows='15' placeholder="Content" />
                            </Form.Group>
                            <Form.Group controlId="formGridImgForContent">
                                <Form.Label>Content Image</Form.Label>
                                <Form.Control placeholder="Image url" />
                            </Form.Group>
                            <Form.Group controlId="formGridAdditionalContent">
                                <Form.Label>Additional Content (optional)</Form.Label>
                                <Form.Control as="textarea" rows='10' placeholder="Content" />
                            </Form.Group>
                            <Form.Group controlId="formGridAdditionalImgForContent">
                                <Form.Label>Additional Content Image (optional)</Form.Label>
                                <Form.Control placeholder="Image url" />
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
