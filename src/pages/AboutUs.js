import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <Container fluid className="text-light my-4">
            <Row className="p-3 p-md-5 bg-warning">
                <Col>
                    <h2 className="fw-bolder text-dark">About Us</h2>
                </Col>
            </Row>
            <Row className="mt-2 justify-content-around align-items-center ">
                <Col md={6} sm={12}>
                    <Card bg={"dark"} text={'white'}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                Our entire team of consists of 13 core members out of which 12 are engineering graduates and a meritorious medical aspirant.Although we all grew up from from different difficult circumstances and different cities, two things brought the 13 of us together: our college and our unified ambition i.e to make a difference in the lives of others. We met for the first time in 2017 and Team Kanaa was born in 2019 and we're getting stronger everyday since then. We started off as just 13 people and now we're close to 50+ volunteers and the good news is you can be a part of us too!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} sm={12}>
                    <Card bg={"dark"} text={'white'}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutUs
