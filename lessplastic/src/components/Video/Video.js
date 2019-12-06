import React from 'react';
import {Link} from "react-router-dom";

const Video = ({ videoProps }) => {

    return (
                <div>
                    <div>
                        <iframe src={videoProps.link}
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen  style={{width: '100%', maxHeight: '250px', maxWidth: '500px', height:'250px'}}/>
                    </div>
                    <div>
                        <Link to={`/videoDetails/${videoProps._id}`} style={{textDecoration: 'none'}}>
                            <h3 style={{color: 'black'}}>{videoProps.title}</h3>
                            <h5 style={{color: 'black', wordWrap: 'break-word', width:'100%'}}>{videoProps.description}</h5>
                        </Link>
                    </div>
                </div>
    )
};

export default Video;
