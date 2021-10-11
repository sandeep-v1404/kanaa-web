import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import * as data from "../data"

const About = () => {
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
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
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

export default About
