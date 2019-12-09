import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import videoService from "../../services/videoService";

const UpdateDeleteVideo = ({ match }) => {
    const path = match.path;
    const history = useHistory();
    const {params: { videoId }} = match;
    const deleteTrue = path.indexOf('deleteVideo') === 1 ? 'delete' : 'notDelete';

    useEffect(() => {
        videoService.getVideo(videoId).then((response) => setVideo(response.data[0], setTitle(response.data[0].title)
            , setDescription(response.data[0].description), setLink(response.data[0].link)))
    }, []);

    const [videoProps, setVideo] = useState({});
    const [title, setTitle] = useState(videoProps.title);
    const [description, setDescription] = useState(videoProps.description);
    const [link, setLink] = useState(videoProps.link);

    function handleSubmit (event) {
        event.preventDefault();

        if (deleteTrue === 'delete'){
            videoService.deleteVideo(videoId).then((data) => history.push('/'));

        } else {
            videoService.editVideo(title, description, link, videoId).then((data) => history.push('/'));
        }
    }

    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Form onSubmit={handleSubmit}>
                        <h1 className="text-center mt-3">{deleteTrue === 'delete' ? 'Delete Video' : 'Edit Video'}</h1>
                        <Form.Group controlId="formGridTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control placeholder="Title" disabled={deleteTrue === 'delete'} defaultValue={title} onChange={(e) => {setTitle(e.target.value)}}/>
                        </Form.Group>
                        <Form.Group controlId="formGridDescr">
                            <Form.Label>Description</Form.Label>
                            <Form.Control  as="textarea" rows='5' placeholder="Description" disabled={deleteTrue === 'delete'} defaultValue={description} onChange={(e) => {setDescription(e.target.value)}}/>
                        </Form.Group>
                        <Form.Group controlId="formGridLink">
                            <Form.Label>Link</Form.Label>
                            <Form.Control placeholder="Link From Youtube" disabled={deleteTrue === 'delete'} defaultValue={link} onChange={(e) => {setLink(e.target.value)}}/>
                        </Form.Group>
                        <Form.Group className="text-center" id="formGridButton">
                            <Button className="text-center" variant="primary" type="submit">{deleteTrue === 'delete' ? 'Delete' : 'Edit'}</Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default UpdateDeleteVideo
