import React from 'react';
import {Carousel} from "react-bootstrap";

const CarouselComponent = ({articles}) => {

    const carouselItems = articles.map(a => (
        <Carousel.Item key={a.id}>
            <img
                className="d-block w-100"
                src={a.image}
                alt="First slide"
                 style={{width: '100%', maxHeight: '400px', maxWidth: '700px', height: 'auto'}}
            />
            <Carousel.Caption>
                <h3>{a.title}</h3>
                <p>{a.description}</p>
            </Carousel.Caption>
        </Carousel.Item>
    ));

    return (<Carousel>
            {carouselItems}
        </Carousel>
    )
};

export default CarouselComponent;
