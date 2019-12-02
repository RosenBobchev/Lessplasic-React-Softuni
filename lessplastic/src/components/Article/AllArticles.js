import React, { Component } from 'react';
import {Container} from "react-bootstrap";
import Article from "./Article";

export default class AllArticles extends Component {

    render() {
        return (
            <Container>
                <div style={{textAlign: 'center'}}>
                    <div style={{marginTop: '10px', marginBottom: '10px', width: '80%', display: 'inline-block'}}>
                    <Article />
                    </div>
                    <div style={{marginTop: '10px', marginBottom: '10px', width: '80%', display: 'inline-block'}}>
                        <Article />
                    </div>
                    <div style={{marginTop: '10px', marginBottom: '10px', width: '80%', display: 'inline-block'}}>
                        <Article />
                    </div>
                    <div style={{marginTop: '10px', marginBottom: '10px', width: '80%', display: 'inline-block'}}>
                        <Article />
                    </div>
                </div>
            </Container>
        )
    }
}
