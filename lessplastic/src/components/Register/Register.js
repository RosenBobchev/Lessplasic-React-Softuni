import React, { Component } from 'react';
import { Form, Row, Col, Button, Container, Alert } from 'react-bootstrap';
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
            errors: [],
            serverError: undefined,
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const {username, password, city, email, confirmPassword} = this.state;

        const errorsArray = [];

        this.setState({errors: []}, () => {
            if (username.length < 5){
                let error = 'Username should be at least 5 symbols long!';
                errorsArray.push(error);
            } if (password.length < 6){
                let error = 'Password should be at least 6 symbols long!';
                errorsArray.push(error);
            } if (city.length < 4){
                let error = 'City should be at least 4 symbols long!';
                errorsArray.push(error);
            } if (email.length < 6){
                let error = 'Email should be at least 6 symbols long!';
                errorsArray.push(error);
            } if (confirmPassword !== password){
                let error = 'Password and Confirm Password should be the same!';
                errorsArray.push(error);
            }

            if (errorsArray.length) {
                this.setState({errors: errorsArray});
            } else {
                authService.register(username, password, city, email)
                    .then((userData) => {
                        authService.saveSession(userData);
                        this.props.history.push('/');
                    })
                    .catch((error) => {this.setState({ serverError: "Username already exists!" })})
            }
        });
    };

    handleStateChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value})
    };

    render() {
        const {errors, serverError} = this.state;
        const errorsToShow = errors !== [] ? errors.map(e => <Alert key={e} variant="danger">{e}</Alert>) : null;
        const usernameExists = serverError ? <Alert variant="danger">{serverError}</Alert> : null;

        return (
            <Container>
                <Row>
                    {console.log(errors)}
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={this.handleSubmit}>
                            <h1 className="text-center mt-3">Register</h1>
                            {errorsToShow}
                            {usernameExists}
                            <Form.Group controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name="email" placeholder="Enter email" onChange={this.handleStateChange} required/>
                            </Form.Group>
                            <Form.Group controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" placeholder="Password" onChange={this.handleStateChange} required/>
                            </Form.Group>
                            <Form.Group controlId="formGridConfirmPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" name="confirmPassword" placeholder="Confirm Password" onChange={this.handleStateChange} required/>
                            </Form.Group>
                            <Form.Group controlId="formGridUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control placeholder="Username" name="username" type="text" onChange={this.handleStateChange} required/>
                            </Form.Group>
                            <Form.Group controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control placeholder="Sozopol"  name="city" type="text" onChange={this.handleStateChange} required/>
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
