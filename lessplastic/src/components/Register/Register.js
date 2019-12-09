import React, { Component } from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import authService from "../../services/authService";
import { withRouter } from 'react-router-dom';

class Register extends Component {

    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            username: '',
            confirmPassword: '',
            city: '',
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const {username, password, city, email} = this.state;
        authService.register(username, password, city, email)
            .then((userData) => {
                authService.saveSession(userData);
                this.props.history.push('/');
            })
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
                            <h1 className="text-center mt-3">Register</h1>
                            <Form.Group controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name="email" placeholder="Enter email" onChange={this.handleStateChange}/>
                            </Form.Group>
                            <Form.Group controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" placeholder="Password" onChange={this.handleStateChange}/>
                            </Form.Group>
                            <Form.Group controlId="formGridConfirmPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" name="confirmPassword" placeholder="Confirm Password" onChange={this.handleStateChange}/>
                            </Form.Group>
                            <Form.Group controlId="formGridUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control placeholder="Username" name="username" type="text" onChange={this.handleStateChange}/>
                            </Form.Group>
                            <Form.Group controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control placeholder="Sozopol"  name="city" type="text" onChange={this.handleStateChange}/>
                            </Form.Group>
                            <Form.Group className="text-center" id="formGridButton">
                                <Button className="text-center" variant="primary" type="submit"  style={{backgroundColor: 'deepskyblue', borderColor: 'deepskyblue', marginBottom: '-80px'}}>Submit</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default withRouter(Register)
