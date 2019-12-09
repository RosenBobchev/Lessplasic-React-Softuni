import React, { Component } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Video from "./Video";
import {Container} from "react-bootstrap";
import videoService from "../../services/videoService";
import Article from "../Article/Article";

export default class AllVideos extends Component {

    constructor(props){
        super(props);

        this.state = {
            videosFromDatabase: []
        }
    }
    componentDidMount() {
        videoService.getAllVideos().then((data) => this.setState({videosFromDatabase: data.data}));
    }

    render() {
        const {videosFromDatabase} = this.state;
        const videos = videosFromDatabase.map(v => (
            <Col md={6} key={v._id}>
                <div style={{margin: '1rem'}}>
                    <Video videoProps={v}/>
                </div>
            </Col>));
        return (
            <Container>
                    <Row>
                        {videos}
                    </Row>
            </Container>

        )
    }
}
