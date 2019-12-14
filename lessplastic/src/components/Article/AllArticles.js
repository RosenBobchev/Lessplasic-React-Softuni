import React, { Component } from 'react';
import {Container} from "react-bootstrap";
import Article from "./Article";
import articleService from "../../services/articleService";
import Col from "react-bootstrap/Col";

export default class AllArticles extends Component {

    constructor(props){
        super(props);

        this.state = {
            forKids: [],
            regular: [],
            science: [],
        }
    }
    componentDidMount() {
        articleService.getArticlesForKids().then((data) => this.setState({forKids: data.data}));
        articleService.getRegularArticles().then((data) => this.setState({regular: data.data}));
        articleService.getScienceArticles().then((data) => this.setState({science: data.data}));
    }

    render() {
        const {science, forKids, regular} = this.state;
        const scienceArticles = science.map(a => (
            <div key={a._id} style={{marginTop: '10px', marginBottom: '10px', width: '80%', display: 'inline-block'}}>
                <Article articleProps={a}/>
            </div>));

        const regularArticles = regular.map(a => (
            <div key={a._id} style={{marginTop: '10px', marginBottom: '10px', width: '80%', display: 'inline-block'}}>
                <Article articleProps={a}/>
            </div>));

        const forKidsArticles = forKids.map(a => (
            <div key={a._id} style={{marginTop: '10px', marginBottom: '10px', width: '80%', display: 'inline-block'}}>
                <Article articleProps={a}/>
            </div>));

        return (
            <Container>
                <div style={{textAlign: 'center'}}>
                    <hr />
                    <h2>Regular</h2>
                    <hr />
                    {regularArticles}
                    <hr />
                    <h2>Science</h2>
                    <hr />
                    {scienceArticles}
                    <hr />
                    <h2>For Kids</h2>
                    <hr />
                    {forKidsArticles}
                </div>
            </Container>
        )
    }
}
