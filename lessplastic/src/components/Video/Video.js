import React from 'react';
import {Link} from "react-router-dom";

const Video = ({ video }) => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 mb-4 responsive">
                    <div style={{width: "600px", height:"330"}}>
                        <iframe width="600" height="330" src="https://www.youtube.com/embed/P7W32Nlqv8s"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen />
                    </div>
                    <div>
                        <Link to={`/videoDetails/${1}`} style={{textDecoration: 'none'}}>
                            <h3 style={{color: 'black', marginLeft: '75%'}}>Title</h3>
                            <h5 style={{color: 'black', marginLeft: '40%', wordWrap: 'break-word', width:'100%'}}>DescriptionDiptioniptioniptioniptioniptioniptioniptioniptioniptionescriptionDescriptionDescriptionDescriptionDescriptionDescription</h5>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Video;
