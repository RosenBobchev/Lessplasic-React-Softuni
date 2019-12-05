import React  from 'react';
import banner from "../../Images/25790964_320798625105943_7213181808521169955_o.jpg"
import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";

const Article = ({ articleProps }) => {

    return (
            <Card>
               <Card.Img variant="top" src={articleProps.articleImage} />
                    <Card.Body>
                        <Card.Title style={{color: '#212529'}}>{articleProps.title}</Card.Title>
                        <Card.Text style={{color: '#212529'}}>
                            {articleProps.content}
                        </Card.Text>
                        <Link to={`/articleDetails/${articleProps._id}`} style={{ flexDirection: 'row', justifyContent: 'flex-end', display: 'flex', textDecoration: 'none'}}><Button style={{backgroundColor: 'deepskyblue', borderColor: 'deepskyblue'}}>Read More</Button></Link>
                    </Card.Body>
            </Card>
    )
};

export default Article;
