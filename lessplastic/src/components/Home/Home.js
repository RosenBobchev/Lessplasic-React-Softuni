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

export class Home extends Component {

    constructor(props){
        super(props);

        this.state = {
            articlesFromDatabase: [],
            articlesForCarousel: [],
            videosFromDatabase: [],
            eventsFromDatabase: [],
            pollsFromDatabase: [],
        }
    }

    componentDidMount() {
        articleService.getTwoArticles().then((data) => this.setState({articlesFromDatabase: data.data}));
        articleService.getArticlesWithMostViews().then((data) => this.setState({articlesForCarousel: data.data}));
        videoService.getTwoVideos().then((data) => this.setState({videosFromDatabase: data.data}));
        eventService.getTwoEvents().then((data) => this.setState({eventsFromDatabase: data.data}));
        pollService.getOnePoll().then((data) => this.setState({pollsFromDatabase: data.data}));
    }

    render() {
        const {articlesFromDatabase, videosFromDatabase, eventsFromDatabase, pollsFromDatabase, articlesForCarousel} = this.state;
        const articles = articlesFromDatabase.map(a => (
            <Col md={4} key={a._id}>
                <div>
                    <Article articleProps={a}/>
                </div>
            </Col>));


        const videos = videosFromDatabase.map(v => (
            <Col md={6} key={v._id}>
                <div style={{marginTop: '1rem'}}>
                    <Video videoProps={v}/>
                </div>
            </Col>
        ));

        const events = eventsFromDatabase.map(e => (
            <Col md={4} key={e._id}>
                <div style={{marginTop: '1rem'}}>
                    <Event eventProps={e}/>
                </div>
            </Col>
        ));

        const polls = pollsFromDatabase.map(p => (
            <Col md={4} key={p._id}>
                <div>
                    <PollDetails pollProps={p}/>
                </div>
            </Col>
        ));

        return (
            <Container style={{marginTop: '20px'}}>
                <Row>
                    <Col md={8}>
                        <div style={{width: '100%', maxHeight: '400px', maxWidth: '700px', height: 'auto'}}>
                            <CarouselComponent articles={articlesForCarousel}/>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div style={{width: '100%', maxHeight: '500px', maxWidth: '500px', height: '500px', marginTop: '10px', marginBottom: '10px'}}>
                            <FacebookProvider appId="2661552967246067">
                                <Page href="https://www.facebook.com/LessplasticBulgaria/" tabs="timeline" />
                            </FacebookProvider>
                        </div>
                    </Col>

                    {articles}

                    <Col md={4} style={{marginTop: '10px'}}>
                        <iframe src='https://www.juicer.io/api/feeds/rosenbobchev/iframe' frameBorder='0' style={{width: '100%', maxHeight: '500px', maxWidth: '340', height: '500px', }}/>
                    </Col>

                    {events}

                    {polls}

                    {videos}

                </Row>
            </Container>
        )
    }
}
