import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const UpdateDeleteEvent = ({ match }) => {
    const path = match.path;
    const {params: { eventId }} = match;
    const deleteTrue = path.indexOf('deleteEvent') === 1 ? 'delete' : 'notDelete';

    return (
        <Container>
            {console.log(eventId)}
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Form>
                        <h1 className="text-center mt-3">{deleteTrue === 'delete' ? 'Delete Event' : 'Edit Event'}</h1>
                        <Form.Group controlId="formGridName">
                            <Form.Label>Event Name</Form.Label>
                            <Form.Control placeholder="Name" disabled={deleteTrue === 'delete'}/>
                        </Form.Group>
                        <Form.Group controlId="formGridTowns">
                            <Form.Label>Towns</Form.Label>
                            <Form.Control placeholder="Town1, Town2, Town3.." disabled={deleteTrue === 'delete'}/>
                        </Form.Group>
                        <Form.Group controlId="formGridDescr">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows='5'  placeholder="Description" disabled={deleteTrue === 'delete'}/>
                        </Form.Group>
                        <Form.Group controlId="formGridDate">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" placeholder="Date" disabled={deleteTrue === 'delete'}/>
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

export default UpdateDeleteEvent
