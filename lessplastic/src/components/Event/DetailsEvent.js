import React, {Component, useEffect, useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import {Button} from "react-bootstrap";
import eventService from "../../services/eventService";
import authService from "../../services/authService";

const EventDetails = ({ match }) => {

    const { params: { eventId } } = match;
    const history = useHistory();
    const [eventProps, setEvent] = useState({});
    const [participants, setParticipants] = useState([]);

    useEffect(() => {
        eventService.getEvent(eventId).then((response) => setEvent(response.data[0], setParticipants(response.data[0].participants)));
    }, []);

    function enrollForEvent (event) {
        const userId = sessionStorage.getItem('userId');
        participants.push(userId);
        eventService.joinEvent(eventId);
        history.push(`/eventDetails/${eventId}`);
    }

    const authorId = sessionStorage.getItem('userId');
    const isEnrolled = participants.includes(authorId);

    const joinEvent = isEnrolled ? <p>You already enrolled for this event!</p> : (
        <div>
            <Button style={{backgroundColor: 'deepskyblue', borderColor: 'deepskyblue'}} onClick={enrollForEvent}>Join</Button>
        </div>);

    return (
        <div>
            <h2 className="text-center" style={{marginTop: '10px'}}>{eventProps.name}</h2>
            <div className="row col-md-12 text-center" style={{justifyContent: 'space-around'}}>
                <p>Дата: {eventProps.dateOfEvent}</p>
                <div>
                    <div>
                        <p>Participants: {participants.length}</p>
                        {authService.isAuth() ? joinEvent : <p>To join you need to be logged in!</p>}
                    </div>
                </div>
            </div>

            <br />
            <div className="row col-md-12" style={{justifyContent: 'space-around'}}>
                <div className="col-md-6">
                        <div style={{wordWrap: 'break-word', padding: '2rem', border: '1px solid rgba(0, 123, 255, 0.5)', borderRadius: '5px', borderOpacity: '0.65'}}>
                            <p>{eventProps.description}</p>
                        </div>
                </div>
                <div className="col-md-6 mt-4" style={{justifyContent: 'center', flexDirection: 'row', display: 'flex'}}>
                    <div className="col-xs-2">
                        <p>Градове:</p>
                        <button type="button" className="btn btn-outline-primary text-color" disabled>{eventProps.towns}</button>
                    </div>
                </div>
            </div>
            <br />
            <div className="row" style={{justifyContent: 'center' , marginBottom: '-80px', marginTop: '20px'}}>
                {eventProps.authorId === authorId ? (<div>
                    <Link to={`/editEvent/${eventProps._id}`} className="btn btn-color text-color"><Button style={{backgroundColor: 'deepskyblue', borderColor: 'deepskyblue'}}>Edit</Button></Link>
                    <Link to={`/deleteEvent/${eventProps._id}`} className="btn btn-color text-color"><Button style={{backgroundColor: 'deepskyblue', borderColor: 'deepskyblue'}}>Delete</Button></Link>
                </div>) : null}
                <div>
                    <Link to={`/events`} className="btn btn-color text-color"><Button style={{backgroundColor: 'deepskyblue', borderColor: 'deepskyblue'}}>Back</Button></Link>
                </div>
            </div>
            <br />
        </div>
    )
};

export default EventDetails;
