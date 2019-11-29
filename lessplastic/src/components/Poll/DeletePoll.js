import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const DeletePoll = ({ match }) => {
    const path = match.path;
    const {params: { pollId }} = match;
    const deleteTrue = path.indexOf('deleteVideo') === 1 ? 'delete' : 'notDelete';

    return (
        <Container>
            {console.log(pollId)}
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Form>
                        <h1 className="text-center mt-3">{deleteTrue === 'delete' ? 'Delete Video' : 'Edit Video'}</h1>
                        <Form.Group controlId="formGridQuestion">
                            <Form.Label>Question</Form.Label>
                            <Form.Control placeholder="Question" disabled={deleteTrue === 'delete'}/>
                        </Form.Group>
                        <Form.Group controlId="formGridAnswers">
                            <Form.Label>Answers</Form.Label>
                            <Form.Control placeholder="Yes, No, Maybe"  disabled={deleteTrue === 'delete'}/>
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

export default DeletePoll
