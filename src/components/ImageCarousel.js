import React from 'react'
import { Carousel } from 'react-bootstrap'

const ImageCarousel = ({ images, autoChange, content, about }) => {
    return (
        <Carousel className={"image-corousel p-sm-4 p-md-0"}>
            {images.map((image, idx) =>
                <Carousel.Item className="corousel-item " key={about ? idx : (idx + 100)} interval={autoChange === false ? null : 2000}>
                    <img
                        className={content ? "corousel-image w-100" : "w-100"}
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
