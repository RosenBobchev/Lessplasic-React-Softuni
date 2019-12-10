import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {Button, Container} from "react-bootstrap";
import videoService from "../../services/videoService";
import authService from "../../services/authService";

const VideoDetails = ({ match }) => {

    const { params: { videoId } } = match;
    const [videoProps, setVideo] = useState({});
    const authorId = sessionStorage.getItem('userId');
    const adminRoleId = 'fdd2fd10-b71d-491a-9d2b-66305ad2171c';

    useEffect(() => {
        videoService.getVideo(videoId).then((response) => setVideo(response.data[0]));
    }, []);

    const [roles, setRoles] = useState([]);

    useEffect(() => {authService.getUserRoles(authorId).then((response) => setRoles(response.data[0]))}, []);

    return (
        <div style={{marginTop: '20px'}}>
            <h2 className="text-center" style={{marginBottom: '20px'}}>{videoProps.title}</h2>
            <div className="row">
                <div className="col-md-6">
                    <div className="embed-responsive embed-responsive-16by9 ml-2">
                        <iframe width="600" height="330" src={videoProps.link}
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="container d-flex justify-content-aroud">
                        <h5 style={{color: 'black', wordWrap: 'break-word', width:'100%'}}>{videoProps.description}</h5>
                    </div>
                </div>
            </div>
            <br/>
            <div className="row" style={{justifyContent: 'center', marginBottom: '-100px'}}>
                {videoProps.authorId === authorId || roles.roleId === adminRoleId ? (<div>
                    <Link to={`/editVideo/${videoProps._id}`} className="btn btn-color text-color"><Button style={{backgroundColor: 'deepskyblue', borderColor: 'deepskyblue'}}>Edit</Button></Link>
                    <Link to={`/deleteVideo/${videoProps._id}`} className="btn btn-color text-color"><Button style={{backgroundColor: 'deepskyblue', borderColor: 'deepskyblue'}}>Delete</Button></Link>
                </div>) : null}
                <div>
                    <Link to={`/videos`} className="btn btn-color text-color"><Button style={{backgroundColor: 'deepskyblue', borderColor: 'deepskyblue'}}>Back</Button></Link>
                </div>
            </div>
        </div>
    )
};

export default VideoDetails;
