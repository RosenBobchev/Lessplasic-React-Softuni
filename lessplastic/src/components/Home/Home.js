import React, { Component } from 'react';
import Article from '../Article/Article';
import Event from '../Event/Event';
import PollDetails from '../Poll/Poll';
import Video from '../Video/Video';

export class Home extends Component {

    render() {
        return (
            <div>
                <h1>Welcome to Lessplastic!</h1>
                    <Article />
                    <Event />
                    <PollDetails />
                    <Video />
            </div>
        )
    }
}
