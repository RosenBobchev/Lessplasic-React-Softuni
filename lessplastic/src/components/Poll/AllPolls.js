import React, { Component } from 'react';
import Poll from 'react-polls';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

const polls = [{id: 1, question: 'first', answers: [{option: 'yes', votes: 2}, {option: 'no', votes: 13}]},
    {id: 2, question: 'second', answers: [{option: 'yes', votes: 2}, {option: 'no', votes: 22}]},
    {id: 3, question: 'third', answers: [{option: 'yes', votes: 2}, {option: 'no', votes: 2}]}];

export default class allPolls extends Component {
    // Setting answers to state to reload the component with each vote
    state = {
        pollAnswers: [polls.map(p => p.answers)]
    };
    // Handling user vote
    // Increments the votes count of answer when the user votes
    handleVote = voteAnswer => {
        const { pollAnswers } = this.state;
        const newPollAnswers = pollAnswers.map(answer => {
            if (answer.option === voteAnswer) answer.votes++;
            return answer
        });

        this.setState({
            pollAnswers: newPollAnswers
        })
    };

    render () {
               const poll = polls.map(p =>
            (<Col md={6}>
                <div style={{margin: '1rem'}}>
                    <Poll question={p.question} answers={p.answers} onVote={this.handleVote} customStyles={{theme: 'cyan', questionBold: true}}/>
                    <Link to={`/deletePoll/${p.id}`} className="btn btn-color text-color"><Button style={{backgroundColor: 'deepskyblue', borderColor: 'deepskyblue'}}>Delete</Button></Link>
                </div>
            </Col>));

        return (
            <div>
                <Row>
                    {poll}
                </Row>
            </div>
        );
    }
};
