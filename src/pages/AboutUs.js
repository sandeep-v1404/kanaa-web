import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';

import Timeline from '../components/Timeline';
import ImageCarousel from '../components/ImageCarousel';
import * as data from "../data"

const AboutUs = () => {
    return (
        <>
            <Container fluid className="text-light my-5">
                <Row className="p-3 p-md-5 bg-warning">
                    <Col>
                        <h2 className="fw-bolder text-dark">About Us</h2>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <ImageCarousel about={true} caption={true} images={data.aboutUsSlider.images} />
                    </Col>
                </Row>

                <Row className="mt-2 justify-content-around align-items-center ">
                    <Col sm={12} md={9}>
                        <Card bg="transparent" text={'white'}>
                            <Card.Body>
                                <Card.Text className="fs-4">
                                    As the motto states “To reach the unreached”, Team Kanaa have reached many such unreached people and environment and have lended helping hands through various activities.Our entire team of consists of 13 core members out of which 12 are engineering graduates and a meritorious medical aspirant.Although we all grew up from from different difficult circumstances and different cities, two things brought the 13 of us together: our college and our unified ambition i.e to make a difference in the lives of others. We met for the first time in 2017 and Team Kanaa was born in 2019 and we're getting stronger everyday since then. We started off as just 13 people and now we're close to 50+ volunteers and the good news is you can be a part of us too!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Timeline />

        </>

    )
}

export default AboutUs
