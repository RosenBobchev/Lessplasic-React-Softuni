import React, { Component } from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import pollService from "../../services/pollsService";

export class CreatePoll extends Component {

    constructor(props){
        super(props);

        this.state = {
            question: '',
            firstAnswer: '',
            secondAnswer: '',
            thirdAnswer: '',
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const {question, firstAnswer, secondAnswer, thirdAnswer} = this.state;
        const authorId = sessionStorage.getItem('userId');

        pollService.createPoll(question, firstAnswer, secondAnswer, thirdAnswer, authorId).then((data) => this.props.history.push('/'));
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
                            <h1 className="text-center mt-3">Create Poll</h1>
                            <Form.Group controlId="formGridQuestion">
                                <Form.Label>Question</Form.Label>
                                <Form.Control placeholder="Question" name="question" onChange={this.handleStateChange}/>
                            </Form.Group>
                            <Form.Group controlId="formGridFirstAnswer">
                                <Form.Label>First Answer</Form.Label>
                                <Form.Control placeholder="Yes" name="firstAnswer" onChange={this.handleStateChange}/>
                            </Form.Group>

                            <Form.Group controlId="formGridSecondAnswer">
                                <Form.Label>Second Answer</Form.Label>
                                <Form.Control placeholder="No" name="secondAnswer" onChange={this.handleStateChange}/>
                            </Form.Group>

                            <Form.Group controlId="formGridThirdAnswer">
                                <Form.Label>Third Answer</Form.Label>
                                <Form.Control placeholder="Maybe" name="thirdAnswer" onChange={this.handleStateChange}/>
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
