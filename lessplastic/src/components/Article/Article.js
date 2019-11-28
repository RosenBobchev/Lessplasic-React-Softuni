import React  from 'react';
import banner from "../../Images/25790964_320798625105943_7213181808521169955_o.jpg"
import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";

const Article = ({ article }) => {

    return (
        <Card style={{ width: '45%' }}>
           <Card.Img variant="top" src={banner} />
                <Card.Body>
                    <Card.Title style={{color: '#212529'}}>Card Title</Card.Title>
                    <Card.Text style={{color: '#212529'}}>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Link to={`/articleDetails/${1}`} style={{ flexDirection: 'row', justifyContent: 'flex-end', display: 'flex', textDecoration: 'none'}}><Button style={{backgroundColor: 'deepskyblue', borderColor: 'deepskyblue'}}>Read More</Button></Link>
                </Card.Body>
        </Card>
    )
};

export default Article;
