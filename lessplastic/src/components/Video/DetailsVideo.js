import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

const VideoDetails = ({ video }) => {

    return (
        <div style={{marginTop: '20px'}}>
            <h2 className="text-center" style={{marginBottom: '20px'}}>Title</h2>
            <div className="row">
                <div className="col-md-6">
                    <div className="embed-responsive embed-responsive-16by9 ml-2">
                        <iframe width="600" height="330" src="https://www.youtube.com/embed/P7W32Nlqv8s"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="container d-flex justify-content-aroud">
                        <h5 style={{color: 'black', wordWrap: 'break-word', width:'100%'}}>DescriptionDiptioniptioniptioniptioniptioniptioniptioniptioniptionescriptionDescriptionDescriptionDescriptionDescriptionDescription</h5>
                    </div>
                </div>
            </div>
            <br/>
            <div className="row" style={{justifyContent: 'center', marginBottom: '-100px'}}>
                <div>
                    <Link to={`/editVideo/${1}`} className="btn btn-color text-color"><Button style={{backgroundColor: 'deepskyblue', borderColor: 'deepskyblue'}}>Edit</Button></Link>
                </div>
                <div>
                    <Link to={`/deleteVideo/${1}`} className="btn btn-color text-color"><Button style={{backgroundColor: 'deepskyblue', borderColor: 'deepskyblue'}}>Delete</Button></Link>
                </div>
                <div>
                    <Link to={`/videos`} className="btn btn-color text-color"><Button style={{backgroundColor: 'deepskyblue', borderColor: 'deepskyblue'}}>Back</Button></Link>
                </div>
            </div>
        </div>
    )
};

export default VideoDetails;
