import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import ImageCarousel from '../components/ImageCarousel';

const Admission = () => {
    return (
        <Container className="mt-5 text-light text-center">
            <Row style={{ marginTop: "100px" }} className="justify-content-around align-items-center ">
                <Col md={6} sm={12}>
                    <ImageCarousel />
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
            <Row style={{ marginTop: "100px" }} className="justify-content-around align-items-center ">
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

export default Admission
