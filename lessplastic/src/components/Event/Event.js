import React from 'react';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import Card from "react-bootstrap/Card";

const Event = ({ eventProps }) => {

    return (
        <Card>
            <Card.Header>Event</Card.Header>
            <Card.Body>
                <Card.Title>{eventProps.name}</Card.Title>
                <Card.Text>{eventProps.description}</Card.Text>
                <Link to={`/eventDetails/${eventProps._id}`}  style={{flexDirection: 'row', justifyContent: 'flex-end', display: 'flex', textDecoration: 'none'}}><Button style={{backgroundColor: 'deepskyblue', borderColor: 'deepskyblue'}}>See more</Button></Link>
            </Card.Body>
        </Card>
    )
};

export default Event;
