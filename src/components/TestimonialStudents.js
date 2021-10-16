import React from 'react'
import { Card } from 'react-bootstrap';
import Carousel from 'react-elastic-carousel'
import * as data from "../data"

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },

];

const TestimonialStudents = () => {
    return (
        <>
            <h2 className="text-center fw-bolder pt-3 my-5 text-light">Student Testimonials</h2>

            <Carousel breakPoints={breakPoints}>

                {data.studentTestimonials.map(student =>
                    <Card key={student.id} style={{ width: "100%" }} className="test-card text-center">
                        <div className="test-img">
                            <img src={student.imageURL} alt="as" />
                        </div>
                        <Card.Body>
                            <Card.Title className="heading fw-bolder">{student.name}</Card.Title>
                            <Card.Text className="description">
                                {student.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>

                )}
            </Carousel>
        </>
    )
}

export default TestimonialStudents
