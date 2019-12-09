import React, { Component } from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import videoService from "../../services/videoService";

export class AddVideo extends Component {

    constructor(props){
        super(props);

        this.state = {
            title: '',
            description: '',
            link: '',
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const {title, description, link} = this.state;

        videoService.createVideo(title, description, link);
        this.props.history.push('/');
    };

    handleStateChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value})
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={this.handleSubmit}>
                            <h1 className="text-center mt-3">Add Video</h1>
                            <Form.Group controlId="formGridTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control placeholder="Title" name="title" onChange={this.handleStateChange}/>
                            </Form.Group>
                            <Form.Group controlId="formGridDescr">
                                <Form.Label>Description</Form.Label>
                                <Form.Control  as="textarea" rows='5' name="description" placeholder="Description" onChange={this.handleStateChange}/>
                            </Form.Group>
                            <Form.Group controlId="formGridLink">
                                <Form.Label>Link</Form.Label>
                                <Form.Control placeholder="Embed Link From Youtube" name="link" onChange={this.handleStateChange}/>
                            </Form.Group>
                            <Form.Group className="text-center" id="formGridButton">
                                <Button className="text-center" variant="primary" type="submit">Create</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}
