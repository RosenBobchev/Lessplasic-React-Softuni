import React, { Component } from 'react';
import {Container} from "react-bootstrap";
import Article from "./Article";
import articleService from "../../services/articleService";
import Col from "react-bootstrap/Col";

export default class AllArticles extends Component {

    constructor(props){
        super(props);

        this.state = {
            articlesFromDatabase: []
        }
    }
    componentDidMount() {
        articleService.getAllArticles().then((data) => this.setState({articlesFromDatabase: data.data}));
    }

    render() {
        const {articlesFromDatabase} = this.state;
        const articles = articlesFromDatabase.map(a => (
            <div key={a._id} style={{marginTop: '10px', marginBottom: '10px', width: '80%', display: 'inline-block'}}>
                <Article articleProps={a}/>
            </div>));

        return (
            <Container>
                <div style={{textAlign: 'center'}}>
                    {articles}
                </div>
            </Container>
        )
    }
}
