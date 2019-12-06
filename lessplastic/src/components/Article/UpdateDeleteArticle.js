import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import articleService from "../../services/articleService";
import { useHistory } from "react-router-dom";

const UpdateDeleteArticle = ({ match }) => {
    const path = match.path;
    const history = useHistory();
    const {params: { articleId }} = match;
    const deleteTrue = path.indexOf('deleteArticle') === 1 ? 'delete' : 'notDelete';

    useEffect(() => {
        articleService.getArticle(articleId).then((response) => setArticle(response.data[0], setTitle(response.data[0].title)
            , setArticleImage(response.data[0].articleImage), setContent(response.data[0].content), setContentImage(response.data[0].contentImage)
            , setAdditionalContent(response.data[0].additionalContent), setAdditionalImage(response.data[0].additionalImage), setType(response.data[0].type)))
    }, []);

    const [articleProps, setArticle] = useState({});
    const [title, setTitle] = useState(articleProps.title);
    const [articleImage, setArticleImage] = useState(articleProps.articleImage);
    const [content, setContent] = useState(articleProps.content);
    const [contentImage, setContentImage] = useState(articleProps.contentImage);
    const [additionalContent, setAdditionalContent] = useState(articleProps.additionalContent);
    const [additionalImage, setAdditionalImage] = useState(articleProps.additionalImage);
    const [type, setType] = useState(articleProps.type);

    function handleSubmit (event) {
        event.preventDefault();

        if (deleteTrue === 'delete'){
            articleService.deleteArticle(articleId);
            history.push('/')
        } else {
            articleService.editArticle(title, articleImage, content, contentImage, additionalContent, additionalImage, type, articleId);
            history.push("/");
        }
    }

    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Form onSubmit={handleSubmit}>
                        <h1 className="text-center mt-3">{deleteTrue === 'delete' ? 'Delete Article' : 'Edit Article'}</h1>
                        <Form.Group controlId="formGridTitle">
                            <Form.Label>Article Title</Form.Label>
                            <Form.Control placeholder="Title" disabled={deleteTrue === 'delete'} defaultValue={title} onChange={(e) => {setTitle(e.target.value)}}/>
                        </Form.Group>
                        <Form.Group controlId="formGridImg">
                            <Form.Label>Article Image</Form.Label>
                            <Form.Control placeholder="Image url" disabled={deleteTrue === 'delete'} defaultValue={articleImage} onChange={(e) => {setArticleImage(e.target.value)}}/>
                        </Form.Group>
                        <Form.Group controlId="formGridContent">
                            <Form.Label>Article Content</Form.Label>
                            <Form.Control as="textarea" rows='15' placeholder="Content" disabled={deleteTrue === 'delete'} defaultValue={content} onChange={(e) => {setContent(e.target.value)}}/>
                        </Form.Group>
                        <Form.Group controlId="formGridImgForContent">
                            <Form.Label>Content Image</Form.Label>
                            <Form.Control placeholder="Image url" disabled={deleteTrue === 'delete'} defaultValue={contentImage} onChange={(e) => {setContentImage(e.target.value)}}/>
                        </Form.Group>
                        <Form.Group controlId="formGridAdditionalContent">
                            <Form.Label>Additional Content(optional)</Form.Label>
                            <Form.Control as="textarea" rows='10' placeholder="Content" disabled={deleteTrue === 'delete'} defaultValue={additionalContent} onChange={(e) => {setAdditionalContent(e.target.value)}}/>
                        </Form.Group>
                        <Form.Group controlId="formGridAdditionalImgForContent">
                            <Form.Label>Additional Image(optional)</Form.Label>
                            <Form.Control placeholder="Image url" disabled={deleteTrue === 'delete'} defaultValue={additionalImage} onChange={(e) => {setAdditionalImage(e.target.value)}}/>
                        </Form.Group>
                        <Form.Group controlId="articleType">
                            <Form.Label>Article Type</Form.Label>
                            <Form.Control as="select" disabled={deleteTrue === 'delete'} onChange={(e) => {setType(e.target.value)}}>
                                <option>Regular</option>
                                <option>Science</option>
                                <option>Kids</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="text-center" id="formGridButton">
                            <Button className="text-center" variant="primary" type="submit">{deleteTrue === 'delete' ? 'Delete' : 'Edit'}</Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default UpdateDeleteArticle
