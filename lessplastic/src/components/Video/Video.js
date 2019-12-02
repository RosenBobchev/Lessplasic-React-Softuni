import React from 'react';
import {Link} from "react-router-dom";

const Video = ({ video }) => {

    return (
                <div>
                    <div>
                        <iframe src="https://www.youtube.com/embed/P7W32Nlqv8s"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen  style={{width: '100%', maxHeight: '250px', maxWidth: '500px', height:'250px'}}/>
                    </div>
                    <div>
                        <Link to={`/videoDetails/${1}`} style={{textDecoration: 'none'}}>
                            <h3 style={{color: 'black'}}>Title</h3>
                            <h5 style={{color: 'black', wordWrap: 'break-word', width:'100%'}}>DescriptionDiptioniptioniptonescriptionDescriptionDepescription</h5>
                        </Link>
                    </div>
                </div>
    )
};

export default Video;
