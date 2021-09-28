import React from 'react'
import { Carousel } from 'react-bootstrap'

const ImageCarousel = () => {
    return (
        <Carousel variant="dark">
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="/images/1.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="/images/2.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="/images/4.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default ImageCarousel
