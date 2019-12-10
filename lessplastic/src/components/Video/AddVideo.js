import React, { Component } from 'react';
import {Form, Row, Col, Button, Container, Alert} from 'react-bootstrap';
import videoService from "../../services/videoService";
import pollService from "../../services/pollsService";

export class AddVideo extends Component {

    constructor(props){
        super(props);

        this.state = {
            title: '',
            description: '',
            link: '',
            errors: [],
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const {title, description, link} = this.state;
        const errorsArray = [];

        this.setState({errors: []}, () => {
            if (title.length < 6){
                let error = 'Титле should be at least 6 symbols long!';
                errorsArray.push(error);
            } if (description.length < 20){
                let error = 'Description should be at least 2 symbols long!';
                errorsArray.push(error);
            } if (!link.startsWith('http')){
                let error = 'Link should start with http/https and to be embedded from youtube!';
                errorsArray.push(error);
            }

            if (errorsArray.length) {
                this.setState({errors: errorsArray});
            } else {
                videoService.createVideo(title, description, link).then((data) => this.props.history.push('/'));
            }
        });
    };

    handleStateChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value})
    };

    render() {
        const {errors} = this.state;
        const errorsToShow = errors !== [] ? errors.map(e => <Alert key={e} variant="danger">{e}</Alert>) : null;

        return (
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={this.handleSubmit}>
                            <h1 className="text-center mt-3">Add Video</h1>
                            {errorsToShow}
                            <Form.Group controlId="formGridTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control placeholder="Title" name="title" onChange={this.handleStateChange} required/>
                            </Form.Group>
                            <Form.Group controlId="formGridDescr">
                                <Form.Label>Description</Form.Label>
                                <Form.Control  as="textarea" rows='5' name="description" placeholder="Description" onChange={this.handleStateChange} required/>
                            </Form.Group>
                            <Form.Group controlId="formGridLink">
                                <Form.Label>Link</Form.Label>
                                <Form.Control placeholder="Embed Link From Youtube" name="link" onChange={this.handleStateChange} required/>
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
