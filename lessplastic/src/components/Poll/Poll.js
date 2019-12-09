import React, { Component } from 'react';
import Poll from 'react-polls';
import pollService from "../../services/pollsService";

export default class PollDetails extends Component {
    // Setting answers to state to reload the component with each vote
    constructor(props) {
        super(props);

        this.state = {
            firstAnswerVotes: this.props.pollProps.firstAnswerVotes,
            secondAnswerVotes: this.props.pollProps.secondAnswerVotes,
            thirdAnswerVotes: this.props.pollProps.thirdAnswerVotes,
        };
    }

    // Handling user vote
    // Increments the votes count of answer when the user votes
    handleVote = voteAnswer => {
        let { firstAnswerVotes,  secondAnswerVotes, thirdAnswerVotes} = this.state;

        if (this.props.pollProps.firstAnswer === voteAnswer) {
            firstAnswerVotes += 1;
            this.setState({firstAnswerVotes: firstAnswerVotes})
        } else if (this.props.pollProps.secondAnswer === voteAnswer) {
            secondAnswerVotes += 1;
            this.setState({secondAnswerVotes: secondAnswerVotes})
        } else {
            thirdAnswerVotes += 1;
            this.setState({thirdAnswerVotes: thirdAnswerVotes})
        }

        pollService.vote(this.props.pollProps._id, voteAnswer)
    };


    render () {
        let { firstAnswerVotes,  secondAnswerVotes, thirdAnswerVotes} = this.state;

        const answers = [{option: this.props.pollProps.firstAnswer, votes: firstAnswerVotes},
            {option: this.props.pollProps.secondAnswer, votes: secondAnswerVotes},
            {option: this.props.pollProps.thirdAnswer, votes: thirdAnswerVotes}];

        return (
            <div>
                <Poll question={this.props.pollProps.question} answers={answers} onVote={this.handleVote} customStyles={{theme: 'cyan', questionBold: true}}/>
            </div>
        );
    }
};
