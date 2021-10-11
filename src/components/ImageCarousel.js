import React from 'react'
import { Carousel } from 'react-bootstrap'

const ImageCarousel = ({ images, caption, autoChange, content }) => {
    return (
        <Carousel className={"image-corousel" && (!caption && "p-4")}>
            {images.map((image, idx) =>
                <Carousel.Item className="corousel-item " key={idx} interval={autoChange === false ? null : 2000}>
                    <img
                        className={content ? "corousel-image img-fluid" : "img-fluid"}
                        src={image}
                        alt="Second slide"
                    />
                    {
                        content &&
                        <Carousel.Caption>
                            <h3>{content[idx].heading}</h3>
                        </Carousel.Caption>
                    }
                </Carousel.Item>
            )
            }
        </Carousel >
    )
}

export default ImageCarousel
