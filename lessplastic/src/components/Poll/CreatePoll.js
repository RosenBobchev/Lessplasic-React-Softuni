import React, { Component } from 'react';
import { Form, Row, Col, Button, Container, Alert } from 'react-bootstrap';
import pollService from "../../services/pollsService";

export class CreatePoll extends Component {

    constructor(props){
        super(props);

        this.state = {
            question: '',
            firstAnswer: '',
            secondAnswer: '',
            thirdAnswer: '',
            errors: [],
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const {question, firstAnswer, secondAnswer, thirdAnswer} = this.state;

        const errorsArray = [];

        this.setState({errors: []}, () => {
            if (question.length < 6){
                let error = 'Question should be at least 6 symbols long!';
                errorsArray.push(error);
            } if (firstAnswer.length < 2){
                let error = 'First Answer should be at least 2 symbols long!';
                errorsArray.push(error);
            } if (secondAnswer.length < 2){
                let error = 'Second Answer should be at least 2 symbols long!';
                errorsArray.push(error);
            } if (thirdAnswer.length < 2){
                let error = 'Third Answer should be at least 2 symbols long!';
                errorsArray.push(error);
            }

            if (errorsArray.length) {
                this.setState({errors: errorsArray});
            } else {
                const authorId = sessionStorage.getItem('userId');
                pollService.createPoll(question, firstAnswer, secondAnswer, thirdAnswer, authorId).then((data) => this.props.history.push('/'));
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
                            <h1 className="text-center mt-3">Create Poll</h1>
                            {errorsToShow}
                            <Form.Group controlId="formGridQuestion">
                                <Form.Label>Question</Form.Label>
                                <Form.Control placeholder="Question" name="question" onChange={this.handleStateChange} required/>
                            </Form.Group>
                            <Form.Group controlId="formGridFirstAnswer">
                                <Form.Label>First Answer</Form.Label>
                                <Form.Control placeholder="Yes" name="firstAnswer" onChange={this.handleStateChange} required/>
                            </Form.Group>

                            <Form.Group controlId="formGridSecondAnswer">
                                <Form.Label>Second Answer</Form.Label>
                                <Form.Control placeholder="No" name="secondAnswer" onChange={this.handleStateChange} required/>
                            </Form.Group>

                            <Form.Group controlId="formGridThirdAnswer">
                                <Form.Label>Third Answer</Form.Label>
                                <Form.Control placeholder="Maybe" name="thirdAnswer" onChange={this.handleStateChange} required/>
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
