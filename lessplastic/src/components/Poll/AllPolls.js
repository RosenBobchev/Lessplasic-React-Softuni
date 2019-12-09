import React, { Component } from 'react';
import Poll from 'react-polls';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import videoService from "../../services/videoService";
import pollService from "../../services/pollsService";


export default class allPolls extends Component {
    // Setting answers to state to reload the component with each vote
    constructor(props){
        super(props);

        this.state = {
            pollsFromDatabase: []
        }
    }
    componentDidMount() {
        pollService.getAllPolls().then((data) => this.setState({pollsFromDatabase: data.data}));
    }

    render () {
        const {pollsFromDatabase} = this.state;
               const polls = pollsFromDatabase.map(p =>{

                   const answers = [{option: p.firstAnswer, votes: p.firstAnswerVotes},
                       {option: p.secondAnswer, votes: p.secondAnswerVotes},
                       {option: p.thirdAnswer, votes: p.thirdAnswerVotes}];

                   const handleVote = voteAnswer => {

                       if (p.firstAnswer === voteAnswer) {
                           p.firstAnswerVotes += 1;
                       } else if (p.secondAnswer === voteAnswer) {
                           p.secondAnswerVotes += 1;
                       } else {
                           p.thirdAnswerVotes += 1;
                       }

                       pollService.vote(p._id, voteAnswer)
                   };

                   const pollId = p._id;

                   return (
                        <Col md={6}>
                        <div style={{margin: '1rem'}}>
                            <Poll question={p.question} answers={answers} onVote={handleVote} customStyles={{theme: 'cyan', questionBold: true}}/>
                            <Link to={`/deletePoll/${pollId}`} className="btn btn-color text-color"><Button style={{backgroundColor: 'deepskyblue', borderColor: 'deepskyblue'}}>Delete</Button></Link>
                            <Link to={`/editPoll/${pollId}`} className="btn btn-color text-color"><Button style={{backgroundColor: 'deepskyblue', borderColor: 'deepskyblue'}}>Edit</Button></Link>
                        </div>
                    </Col>)});

        return (
            <div>
                <Row>
                    {polls}
                </Row>
            </div>
        );
    }
};
