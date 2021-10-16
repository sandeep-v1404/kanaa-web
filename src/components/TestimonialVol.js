import React from 'react'
import { Card } from 'react-bootstrap';
import Carousel from 'react-elastic-carousel'
import * as data from "../data"

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
];

const TestimonialVol = () => {
    return (
        <>
            <h2 className="text-center fw-bolder pt-3 my-5 text-light">Volunteer Testimonials</h2>

            <Carousel breakPoints={breakPoints}>

                {data.volunteerTestimonials.map(volunteer =>
                    <Card key={volunteer.id} style={{ width: "100%" }} className="test-card text-center">
                        <div className="test-img">
                            <img src={volunteer.imageURL} alt="as" />
                        </div>
                        <Card.Body>
                            <Card.Title className="heading fw-bolder">{volunteer.name}</Card.Title>
                            <Card.Text className="description">
                                {volunteer.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>

                )}
            </Carousel>
        </>
    )
}

export default TestimonialVol
