import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const UpdateDeleteArticle = ({ match }) => {
    const path = match.path;
    const {params: { articleId }} = match;
    const deleteTrue = path.indexOf('deleteArticle') === 1 ? 'delete' : 'notDelete';

    return (
        <Container>
            {console.log(articleId)}
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Form>
                        <h1 className="text-center mt-3">{deleteTrue === 'delete' ? 'Delete Article' : 'Edit Article'}</h1>
                        <Form.Group controlId="formGridTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control placeholder="Title" disabled={deleteTrue === 'delete'}/>
                        </Form.Group>
                        <Form.Group controlId="formGridImg">
                            <Form.Label>Article Image</Form.Label>
                            <Form.Control placeholder="Image url" disabled={deleteTrue === 'delete'}/>
                        </Form.Group>
                        <Form.Group controlId="formGridContent">
                            <Form.Label>Content</Form.Label>
                            <Form.Control as="textarea" rows='15' placeholder="Content" disabled={deleteTrue === 'delete'}/>
                        </Form.Group>
                        <Form.Group controlId="formGridImgForContent">
                            <Form.Label>Content Image</Form.Label>
                            <Form.Control placeholder="Image url" disabled={deleteTrue === 'delete'}/>
                        </Form.Group>
                        <Form.Group controlId="formGridAdditionalContent">
                            <Form.Label>Additional Content (optional)</Form.Label>
                            <Form.Control as="textarea" rows='10' placeholder="Content" disabled={deleteTrue === 'delete'}/>
                        </Form.Group>
                        <Form.Group controlId="formGridAdditionalImgForContent">
                            <Form.Label>Additional Content Image (optional)</Form.Label>
                            <Form.Control placeholder="Image url" disabled={deleteTrue === 'delete'}/>
                        </Form.Group>
                        <Form.Group controlId="articleType">
                            <Form.Label>Article Type</Form.Label>
                            <Form.Control as="select" disabled={deleteTrue === 'delete'}>
                                <option>Regular</option>
                                <option>Science</option>
                                <option>Kids</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="text-center" id="formGridButton">
                            <Button className="text-center" variant="primary" type="submit">{deleteTrue === 'delete' ? 'Delete' : 'Edit'}</Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default UpdateDeleteArticle
