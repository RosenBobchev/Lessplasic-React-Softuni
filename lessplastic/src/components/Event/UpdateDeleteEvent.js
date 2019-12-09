import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import eventService from "../../services/eventService";

const UpdateDeleteEvent = ({ match }) => {
    const path = match.path;
    const history = useHistory();
    const {params: { eventId }} = match;
    const deleteTrue = path.indexOf('deleteEvent') === 1 ? 'delete' : 'notDelete';

    useEffect(() => {
        eventService.getEvent(eventId).then((response) => setEvent(response.data[0], setName(response.data[0].name)
            , setDescription(response.data[0].description), setTowns(response.data[0].towns), setDate(response.data[0].dateOfEvent)))
    }, []);

    const [eventProps, setEvent] = useState({});
    const [name, setName] = useState(eventProps.name);
    const [towns, setTowns] = useState(eventProps.towns);
    const [description, setDescription] = useState(eventProps.description);
    const [dateOfEvent, setDate] = useState(eventProps.dateOfEvent);

    function handleSubmit (event) {
        event.preventDefault();

        if (deleteTrue === 'delete'){
            eventService.deleteEvent(eventId);
            history.push('/')
        } else {
            eventService.editEvent(name, description, towns, dateOfEvent, eventId);
            history.push(`/`);
        }
    }

    return (
        <Container>
            {console.log(eventId)}
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Form onSubmit={handleSubmit}>
                        <h1 className="text-center mt-3">{deleteTrue === 'delete' ? 'Delete Event' : 'Edit Event'}</h1>
                        <Form.Group controlId="formGridName">
                            <Form.Label>Event Name</Form.Label>
                            <Form.Control placeholder="Name" disabled={deleteTrue === 'delete'} defaultValue={name} onChange={(e) => {setName(e.target.value)}}/>
                        </Form.Group>
                        <Form.Group controlId="formGridTowns">
                            <Form.Label>Towns</Form.Label>
                            <Form.Control placeholder="Town1, Town2, Town3.." disabled={deleteTrue === 'delete'} defaultValue={towns} onChange={(e) => {setTowns(e.target.value)}}/>
                        </Form.Group>
                        <Form.Group controlId="formGridDescr">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows='5'  placeholder="Description" disabled={deleteTrue === 'delete'} defaultValue={description} onChange={(e) => {setDescription(e.target.value)}}/>
                        </Form.Group>
                        <Form.Group controlId="formGridDate">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" placeholder="Date" disabled={deleteTrue === 'delete'} defaultValue={dateOfEvent} onChange={(e) => {setDate(e.target.value)}}/>
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
