import React from 'react'
import { Carousel } from 'react-bootstrap'

const ImageCarousel = ({ images, caption, autoChange, content }) => {
    return (
        <Carousel fade className={"image-corousel" && (!caption && "p-4") && (content && "")}>
            {images.map((image, idx) =>
                <Carousel.Item key={idx} interval={autoChange === false ? null : 1000}>
                    <img
                        className="d-block w-100 "
                        src={image}
                        alt="Second slide"
                    />
                    {
                        content &&
                        <Carousel.Caption>
                            <h3>{content[idx].heading}</h3>
                            <p>{content[idx].description}</p>
                        </Carousel.Caption>
                    }
                </Carousel.Item>
            )
            }
        </Carousel >
    )
}

export default ImageCarousel
