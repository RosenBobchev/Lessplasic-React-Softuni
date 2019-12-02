import React from 'react';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import Card from "react-bootstrap/Card";

const Event = ({ event }) => {

    return (
        <Card>
            <Card.Header>Event</Card.Header>
            <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>Description</Card.Text>
                <Link to={`/eventDetails/${1}`}  style={{flexDirection: 'row', justifyContent: 'flex-end', display: 'flex', textDecoration: 'none'}}><Button style={{backgroundColor: 'deepskyblue', borderColor: 'deepskyblue'}}>See more</Button></Link>
            </Card.Body>
        </Card>
    )
};

export default Event;
