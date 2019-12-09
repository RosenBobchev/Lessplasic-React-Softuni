import React, { Component } from 'react';
import Event from "./Event";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import eventService from "../../services/eventService";
import Video from "../Video/Video";

export default class AllEvents extends Component {

    constructor(props){
        super(props);

        this.state = {
            eventsFromDatabase: []
        }
    }
    componentDidMount() {
        eventService.getAllEvents().then((data) => this.setState({eventsFromDatabase: data.data}));
    }

    render() {
        const {eventsFromDatabase} = this.state;

        const events = eventsFromDatabase.map(e => (
            <Col md={6} key={e._id}>
                <div style={{margin: '1rem'}}>
                    <Event eventProps={e}/>
                </div>
            </Col>));

        return (
            <div>
                <Row>
                    {events}
                </Row>
            </div>
        )
    }
}
