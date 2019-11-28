import React from 'react';
import {Link} from "react-router-dom";
import {Button, Image} from "react-bootstrap";
import banner from "../../Images/25790964_320798625105943_7213181808521169955_o.jpg"

const ArticleDetails = ({ article }) => {

    return (
        <div>
            <div className="text-center mt-3">
                <Image src={banner} style={{width: '100%', maxHeight: '300px', maxWidth: '600px', height: 'auto'}}/>
            </div>
            <br/>
            <h1 className="text-center">Title</h1>
            <div className="row col-md-12">
                <h5 className="text-center col-md-6">Created at: 28.11.2019</h5>
                <h5 className="text-center col-md-6">Views: 5</h5>
            </div>
            <br/>
            <div style={{wordWrap: 'break-word', padding: '2rem'}}>
                <p>texxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxetetetetee</p>
            </div>
            <div className="text-center mt-3">
                <Image src={banner}  style={{width: '100%', maxHeight: '300px', maxWidth: '600px', height: 'auto'}}/>
            </div>
            <br/>
            <div style={{wordWrap: 'break-word', padding: '2rem'}}>
                <p>texxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxeteteteteetexxetetetetee</p>
            </div>

            <div className="text-center mt-3">
                <Image src={banner}  style={{width: '100%', maxHeight: '300px', maxWidth: '600px', height: 'auto'}} />
            </div>
            <br/>
            <div className="row" style={{justifyContent: 'center', marginBottom: '-80px', marginTop: '20px'}}>
                <div>
                    <Link to={`/editArticle/${1}`} className="btn btn-color text-color"><Button style={{backgroundColor: 'deepskyblue', borderColor: 'deepskyblue'}}>Edit</Button></Link>
                </div>
                <div>
                    <Link to={`/editArticle/${1}`} className="btn btn-color text-color"><Button style={{backgroundColor: 'deepskyblue', borderColor: 'deepskyblue'}}>Delete</Button></Link>
                </div>
                <div>
                    <Link to={`/articles`} className="btn btn-color text-color"><Button style={{backgroundColor: 'deepskyblue', borderColor: 'deepskyblue'}}>Back</Button></Link>
                </div>
            </div>
            <br />
        </div>
    )
};

export default ArticleDetails;
