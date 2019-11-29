import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const UpdateDeleteVideo = ({ match }) => {
    const path = match.path;
    const {params: { videoId }} = match;
    const deleteTrue = path.indexOf('deleteVideo') === 1 ? 'delete' : 'notDelete';

    return (
        <Container>
            {console.log(videoId)}
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Form>
                        <h1 className="text-center mt-3">{deleteTrue === 'delete' ? 'Delete Video' : 'Edit Video'}</h1>
                        <Form.Group controlId="formGridTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control placeholder="Title" disabled={deleteTrue === 'delete'}/>
                        </Form.Group>
                        <Form.Group controlId="formGridDescr">
                            <Form.Label>Description</Form.Label>
                            <Form.Control  as="textarea" rows='5' placeholder="Description" disabled={deleteTrue === 'delete'}/>
                        </Form.Group>
                        <Form.Group controlId="formGridLink">
                            <Form.Label>Link</Form.Label>
                            <Form.Control placeholder="Link From Youtube" disabled={deleteTrue === 'delete'}/>
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

export default UpdateDeleteVideo
