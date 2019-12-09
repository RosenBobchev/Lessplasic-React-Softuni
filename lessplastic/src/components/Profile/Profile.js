import React, { Component } from 'react';
import CarouselComponent from "../Utils/Carousel";
import {Container, Image} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Article from "../Article/Article";
import Event from "../Event/Event";
import PollDetails from "../Poll/Poll";
import Video from "../Video/Video";
import {FacebookProvider, Page} from 'react-facebook';
import articleService from "../../services/articleService";
import videoService from "../../services/videoService";
import eventService from "../../services/eventService";
import remote from '../../services/remote'
import pollService from "../../services/pollsService";

export default class Profile extends Component {

    constructor(props){
        super(props);

        this.state = {
            articlesFromDatabase: [],
            videosFromDatabase: [],
            eventsFromDatabase: [],
            pollsFromDatabase: [],
        }
    }

    componentDidMount() {
        articleService.getAllUserArticles().then((data) => this.setState({articlesFromDatabase: data.data}));
        videoService.getAllUserEvents().then((data) => this.setState({videosFromDatabase: data.data}));
        eventService.getAllUserEvents().then((data) => this.setState({eventsFromDatabase: data.data}));
        pollService.getAllUserPolls().then((data) => this.setState({pollsFromDatabase: data.data}));
    }

    render() {
        const {articlesFromDatabase, videosFromDatabase, eventsFromDatabase, pollsFromDatabase} = this.state;
        const articles = articlesFromDatabase.map(a => (
            <Col md={4} key={a._id}>
                <div style={{marginTop: '1rem', marginBottom: '1rem'}}>
                    <Article articleProps={a}/>
                </div>
            </Col>));


        const videos = videosFromDatabase.map(v => (
            <Col md={6} key={v._id}>
                <div style={{marginTop: '1rem', marginBottom: '1rem'}}>
                    <Video videoProps={v}/>
                </div>
            </Col>
        ));

        const events = eventsFromDatabase.map(e => (
            <Col md={4} key={e._id}>
                <div style={{marginTop: '1rem', marginBottom: '1rem'}}>
                    <Event eventProps={e}/>
                </div>
            </Col>
        ));

        const polls = pollsFromDatabase.map(p => (
            <Col md={4} key={p._id}>
                <div style={{marginTop: '1rem', marginBottom: '1rem'}}>
                    <PollDetails pollProps={p}/>
                </div>
            </Col>
        ));

        return (
            <Container style={{marginTop: '20px'}}>
                <h2 style={{textAlign: 'center'}}>Articles</h2>
                <Row>
                    {articles}
                </Row>
                <hr />
                <h2 style={{textAlign: 'center'}}>Events</h2>
                <Row>
                    {events}
                </Row>
                <hr />
                <h2 style={{textAlign: 'center'}}>Polls</h2>
                <Row>
                    {polls}
                </Row>
                <hr />
                <h2 style={{textAlign: 'center'}}>Videos</h2>
                <Row>
                    {videos}
                </Row>
                <hr />
            </Container>
        )
    }
}
