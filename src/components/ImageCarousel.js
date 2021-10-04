import React from 'react'
import { Carousel } from 'react-bootstrap'

const ImageCarousel = ({ images }) => {
    return (
        <Carousel variant="dark" fade>
            {images.map((image, idx) =>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={image}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )}
        </Carousel>
    )
}

export default ImageCarousel
