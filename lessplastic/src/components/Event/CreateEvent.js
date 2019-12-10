import React, { Component } from 'react';
import {Form, Row, Col, Button, Container, Alert} from 'react-bootstrap';
import eventService from "../../services/eventService";
import articleService from "../../services/articleService";

export class CreateEvent extends Component {

    constructor(props){
        super(props);

        this.state = {
            name: '',
            description: '',
            towns: '',
            dateOfEvent: null,
            errors: [],
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const {name, description, towns, dateOfEvent} = this.state;

        const errorsArray = [];

        this.setState({errors: []}, () => {
            if (name.length < 5){
                let error = 'Name should be at least 5 symbols long!';
                errorsArray.push(error);
            } if (description.length < 30){
                let error = 'Content should be at least 30 symbols long!';
                errorsArray.push(error);
            } if (/^[a-zA-Z,]*$/.test(towns)){
                let error = 'Town names should be separated with comma and space (town1, town2..) ';
                errorsArray.push(error);
            }

            if (errorsArray.length) {
                this.setState({errors: errorsArray});
            } else {
                const userId = sessionStorage.getItem('userId');
                let participants = [];
                participants.push(userId);
                eventService.createEvent(name, description, towns, dateOfEvent, participants, userId).then((data) => this.props.history.push('/'));
            }
        });
    };

    handleStateChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value})
    };

    render() {
        const {errors} = this.state;
        const errorsToShow = errors !== [] ? errors.map(e => <Alert key={e} variant="danger">{e}</Alert>) : null;

        return (
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={this.handleSubmit}>
                            <h1 className="text-center mt-3">Create Event</h1>
                            {errorsToShow}
                            <Form.Group controlId="formGridName">
                                <Form.Label>Event Name</Form.Label>
                                <Form.Control placeholder="Name" name="name" onChange={this.handleStateChange} required/>
                            </Form.Group>
                            <Form.Group controlId="formGridTowns">
                                <Form.Label>Towns</Form.Label>
                                <Form.Control placeholder="Town1, Town2, Town3.." name="towns" onChange={this.handleStateChange} required/>
                            </Form.Group>
                            <Form.Group controlId="formGridDescr">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows='5'  placeholder="Description" name="description" onChange={this.handleStateChange} required/>
                            </Form.Group>
                            <Form.Group controlId="formGridDate">
                                <Form.Label>Date</Form.Label>
                                <Form.Control type="date" placeholder="Date" name="dateOfEvent" onChange={this.handleStateChange} required/>
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
