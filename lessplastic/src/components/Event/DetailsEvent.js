import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

const EventDetails = ({ event }) => {

    return (
        <div>
            <h2 className="text-center" style={{marginTop: '10px'}}>Title</h2>
            <div className="row col-md-12 text-center" style={{justifyContent: 'space-around'}}>
                <p>Дата: 28.11.2019 21:30</p>
                <div>
                    <div>
                        <p>Participants: 1</p>
                        <p>You already enrolled for this event!</p>
                        <div>
                            <Link to={`/editArticle/${1}`} className="btn btn-color text-color"><Button style={{backgroundColor: 'deepskyblue', borderColor: 'deepskyblue'}}>Join</Button></Link>
                        </div>
                    </div>
                </div>
            </div>

            <br />
            <div className="row col-md-12" style={{justifyContent: 'space-around'}}>
                <div className="col-md-6">
                        <div style={{wordWrap: 'break-word', padding: '2rem', border: '1px solid rgba(0, 123, 255, 0.5)', borderRadius: '5px', borderOpacity: '0.65'}}>
                            <p>texxeteteteteetexxeteteteteesdadasdsadsadsadassasaasdsadsadsadsadsasadsadsadsasadsadsadsatexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxetetetetee</p>
                        </div>
                </div>
                <div className="col-md-6 mt-4" style={{justifyContent: 'center', flexDirection: 'row', display: 'flex'}}>
                    <div className="col-xs-2">
                        <p>Градове:</p>
                        <button type="button" className="btn btn-outline-primary text-color" disabled>Burgas, Sozopol, Sofia</button>
                    </div>
                </div>
            </div>
            <br />
            <div className="row" style={{justifyContent: 'center' , marginBottom: '-80px', marginTop: '20px'}}>
                <div>
                    <Link to={`/editArticle/${1}`} className="btn btn-color text-color"><Button style={{backgroundColor: 'deepskyblue', borderColor: 'deepskyblue'}}>Edit</Button></Link>
                </div>
                <div>
                    <Link to={`/editArticle/${1}`} className="btn btn-color text-color"><Button style={{backgroundColor: 'deepskyblue', borderColor: 'deepskyblue'}}>Delete</Button></Link>
                </div>
                <div>
                    <Link to={`/events`} className="btn btn-color text-color"><Button style={{backgroundColor: 'deepskyblue', borderColor: 'deepskyblue'}}>Back</Button></Link>
                </div>
            </div>
            <br />
        </div>
    )
};

export default EventDetails;
