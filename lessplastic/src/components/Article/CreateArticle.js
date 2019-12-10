import React, { Component } from 'react';
import { Form, Row, Col, Button, Container, Alert } from 'react-bootstrap';
import authService from "../../services/authService";
import articleService from "../../services/articleService";

export class CreateArticle extends Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            articleImage: '',
            content: '',
            contentImage: '',
            additionalContent: '',
            additionalImage: '',
            type: 'Regular',
            errors: [],
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const {title, articleImage, content, contentImage, additionalContent, additionalImage, type} = this.state;
        const errorsArray = [];

        this.setState({errors: []}, () => {
            if (title.length < 5){
                let error = 'Title should be at least 5 symbols long!';
                errorsArray.push(error);
            } if (!articleImage.startsWith('http')){
                let error = 'Article Image url should start with http/https!';
                errorsArray.push(error);
            } if (content.length < 50){
                let error = 'Content should be at least 50 symbols long!';
                errorsArray.push(error);
            } if (!contentImage.startsWith('http')){
                let error = 'Content Image url should start with http/https!';
                errorsArray.push(error);
            } if(additionalContent.length > 1) {
                if (additionalContent.length < 20) {
                    let error = 'Additional Content should be at least 20 symbols long!';
                    errorsArray.push(error);
                }
            } if(additionalImage.length > 1) {
                if (additionalImage.startsWith('http')){
                    let error = 'Additional Content Image url should start with http/https!';
                    errorsArray.push(error);
                }
            }

            if (errorsArray.length) {
                this.setState({errors: errorsArray});
            } else {
                articleService.createArticle(title, articleImage, content, contentImage, additionalContent, additionalImage, type)
                    .then((data) => this.props.history.push('/'));
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
                            <h1 className="text-center mt-3">Create Article</h1>
                            {errorsToShow}
                            <Form.Group controlId="formGridTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control placeholder="Title" name="title" onChange={this.handleStateChange} required/>
                            </Form.Group>
                            <Form.Group controlId="formGridImg">
                                <Form.Label>Article Image</Form.Label>
                                <Form.Control placeholder="Image url"  name="articleImage" onChange={this.handleStateChange} required/>
                            </Form.Group>
                            <Form.Group controlId="formGridContent">
                                <Form.Label>Content</Form.Label>
                                <Form.Control as="textarea" rows='15' placeholder="Content" name="content" onChange={this.handleStateChange} required/>
                            </Form.Group>
                            <Form.Group controlId="formGridImgForContent">
                                <Form.Label>Content Image</Form.Label>
                                <Form.Control placeholder="Image url" name="contentImage" onChange={this.handleStateChange} required/>
                            </Form.Group>
                            <Form.Group controlId="formGridAdditionalContent">
                                <Form.Label>Additional Content (optional)</Form.Label>
                                <Form.Control as="textarea" rows='10' placeholder="Content" name="additionalContent" onChange={this.handleStateChange}/>
                            </Form.Group>
                            <Form.Group controlId="formGridAdditionalImgForContent">
                                <Form.Label>Additional Content Image (optional)</Form.Label>
                                <Form.Control placeholder="Image url" name="additionalImage" onChange={this.handleStateChange}/>
                            </Form.Group>
                            <Form.Group controlId="articleType">
                                <Form.Label>Article Type</Form.Label>
                                <Form.Control as="select" name="type" onChange={this.handleStateChange}>
                                    <option>Regular</option>
                                    <option>Science</option>
                                    <option>Kids</option>
                                </Form.Control>
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
