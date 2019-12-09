import React, { Component } from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import eventService from "../../services/eventService";

export class CreateEvent extends Component {

    constructor(props){
        super(props);

        this.state = {
            name: '',
            description: '',
            towns: '',
            dateOfEvent: null,
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const {name, description, towns, dateOfEvent} = this.state;

        const userId = sessionStorage.getItem('userId');
        let participants = [];
        participants.push(userId);
        eventService.createEvent(name, description, towns, dateOfEvent, participants, userId).then((data) => this.props.history.push('/'));
    };

    handleStateChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value})
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={this.handleSubmit}>
                            <h1 className="text-center mt-3">Create Event</h1>
                            <Form.Group controlId="formGridName">
                                <Form.Label>Event Name</Form.Label>
                                <Form.Control placeholder="Name" name="name" onChange={this.handleStateChange}/>
                            </Form.Group>
                            <Form.Group controlId="formGridTowns">
                                <Form.Label>Towns</Form.Label>
                                <Form.Control placeholder="Town1, Town2, Town3.." name="towns" onChange={this.handleStateChange}/>
                            </Form.Group>
                            <Form.Group controlId="formGridDescr">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows='5'  placeholder="Description" name="description" onChange={this.handleStateChange}/>
                            </Form.Group>
                            <Form.Group controlId="formGridDate">
                                <Form.Label>Date</Form.Label>
                                <Form.Control type="date" placeholder="Date" name="dateOfEvent" onChange={this.handleStateChange}/>
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
