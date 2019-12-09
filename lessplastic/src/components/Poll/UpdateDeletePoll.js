import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useHistory} from "react-router";
import pollService from "../../services/pollsService";

const UpdateDeletePoll = ({ match }) => {
    const path = match.path;
    const history = useHistory();
    const {params: { pollId }} = match;
    const deleteTrue = path.indexOf('deletePoll') === 1 ? 'delete' : 'notDelete';

    useEffect(() => {
        pollService.getPoll(pollId).then((response) => setPoll(response.data[0], setQuestion(response.data[0].question)
            , setFirstAnswer(response.data[0].firstAnswer), setSecondAnswer(response.data[0].secondAnswer), setThirdAnswer(response.data[0].thirdAnswer)))
    }, []);

    const [pollProps, setPoll] = useState({});
    const [question, setQuestion] = useState(pollProps.question);
    const [firstAnswer, setFirstAnswer] = useState(pollProps.firstAnswer);
    const [secondAnswer, setSecondAnswer] = useState(pollProps.secondAnswer);
    const [thirdAnswer, setThirdAnswer] = useState(pollProps.thirdAnswer);

    function handleSubmit (event) {
        event.preventDefault();

        if (deleteTrue === 'delete'){
            pollService.deletePoll(pollId).then((data) => history.push('/'));

        } else {
            pollService.editPoll(question, firstAnswer, secondAnswer, thirdAnswer, pollId).then((data) => history.push('/'));
        }
    }

    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Form onSubmit={handleSubmit}>
                        <h1 className="text-center mt-3">{deleteTrue === 'delete' ? 'Delete Poll' : 'Edit Poll'}</h1>
                        <Form.Group controlId="formGridQuestion">
                            <Form.Label>Question</Form.Label>
                            <Form.Control placeholder="Question" disabled={deleteTrue === 'delete'} defaultValue={question} onChange={(e) => {setQuestion(e.target.value)}}/>
                        </Form.Group>
                        <Form.Group controlId="formGridFirstAnswer">
                            <Form.Label>First Answer</Form.Label>
                            <Form.Control placeholder="Yes" disabled={deleteTrue === 'delete'} defaultValue={firstAnswer} onChange={(e) => {setFirstAnswer(e.target.value)}}/>
                        </Form.Group>

                        <Form.Group controlId="formGridSecondAnswer">
                            <Form.Label>Second Answer</Form.Label>
                            <Form.Control placeholder="No" disabled={deleteTrue === 'delete'} defaultValue={secondAnswer} onChange={(e) => {setSecondAnswer(e.target.value)}}/>
                        </Form.Group>

                        <Form.Group controlId="formGridThirdAnswer">
                            <Form.Label>Third Answer</Form.Label>
                            <Form.Control placeholder="Maybe" disabled={deleteTrue === 'delete'} defaultValue={thirdAnswer} onChange={(e) => {setThirdAnswer(e.target.value)}}/>
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

export default UpdateDeletePoll
