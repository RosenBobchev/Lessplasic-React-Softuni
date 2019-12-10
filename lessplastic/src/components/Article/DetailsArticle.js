import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {Button, Image} from "react-bootstrap";
import banner from "../../Images/25790964_320798625105943_7213181808521169955_o.jpg"
import articleService from "../../services/articleService";
import authService from "../../services/authService";

const ArticleDetails = ({ match }) => {

    const { params: { articleId } } = match;
    const [articleProps, setArticle] = useState({});
    const authorId = sessionStorage.getItem('userId');
    const [roles, setRoles] = useState([]);
    const adminRoleId = 'fdd2fd10-b71d-491a-9d2b-66305ad2171c';

    useEffect(() => {
        articleService.getArticle(articleId).then((response) => setArticle(response.data[0]));
        articleService.incrementViews(articleId);
    }, []);

    useEffect(() => {authService.getUserRoles(authorId).then((response) => setRoles(response.data[0]))}, []);

    return (
        <div>
            <div className="text-center mt-3">
                <Image src={articleProps.articleImage} style={{width: '100%', maxHeight: '300px', maxWidth: '600px', height: 'auto'}}/>
            </div>
            <br/>
            <h1 className="text-center">{articleProps.title}</h1>
            <div className="row col-md-12">
                <h5 className="text-center col-md-6">Created at: 28.11.2019</h5>
                <h5 className="text-center col-md-6">Views: {articleProps.views}</h5>
            </div>
            <br/>
            <div style={{wordWrap: 'break-word', padding: '2rem'}}>
                <p>{articleProps.content}</p>
            </div>
            <div className="text-center mt-3">
                <Image src={articleProps.contentImage}  style={{width: '100%', maxHeight: '300px', maxWidth: '600px', height: 'auto'}}/>
            </div>
            <br/>
            <div style={{wordWrap: 'break-word', padding: '2rem'}}>
                <p>{articleProps.additionalContent}</p>
            </div>

            <div className="text-center mt-3">
                <Image src={articleProps.additionalImage}  style={{width: '100%', maxHeight: '300px', maxWidth: '600px', height: 'auto'}} />
            </div>
            <br/>
            <div className="row" style={{justifyContent: 'center', marginBottom: '-80px', marginTop: '20px'}}>
                {articleProps.authorId === authorId || roles.roleId === adminRoleId ? (<div>
                        <Link to={`/editArticle/${articleProps._id}`} className="btn btn-color text-color"><Button style={{backgroundColor: 'deepskyblue', borderColor: 'deepskyblue'}}>Edit</Button></Link>
                        <Link to={`/deleteArticle/${articleProps._id}`} className="btn btn-color text-color"><Button style={{backgroundColor: 'deepskyblue', borderColor: 'deepskyblue'}}>Delete</Button></Link>
                </div>) : null}
                <div>
                    <Link to={`/articles`} className="btn btn-color text-color"><Button style={{backgroundColor: 'deepskyblue', borderColor: 'deepskyblue'}}>Back</Button></Link>
                </div>
            </div>
            <br />
        </div>
    )
};

export default ArticleDetails;
