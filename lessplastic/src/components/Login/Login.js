import React, { Component } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import authService from "../../services/authService";

export class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: '',
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const {username, password} = this.state;
        authService.login(username, password)
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
                        <h1 className="text-center mt-3">Login</h1>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formGridEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" name="username" placeholder="Enter Username" onChange={this.handleStateChange}/>
                            </Form.Group>
                            <Form.Group controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" placeholder="Password" onChange={this.handleStateChange}/>
                            </Form.Group>
                            <Form.Group className="text-center" id="formGridButton">
                                <Button className="text-center" variant="primary" type="submit" style={{backgroundColor: 'deepskyblue', borderColor: 'deepskyblue'}}>Submit</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}
