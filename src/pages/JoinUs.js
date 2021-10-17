import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import TestimonialVol from '../components/TestimonialVol';

const JoinUs = () => {
    return (
        <Container fluid>
            <Row className="p-3 p-md-5 bg-warning">
                <Col>
                    <h2 className="fw-bolder text-dark">Join Us</h2>
                </Col>
            </Row>

            <Row className="mt-2 justify-content-around align-items-center ">
                <Col md={10} >
                    <img className="img-fluid" src='https://res.cloudinary.com/teamkanaa/image/upload/v1632825612/Kanaa Website/Slider/2.jpg' alt="" />
                </Col>

            </Row>
            <Row className="mt-5 justify-content-around align-items-center ">
                <Col md={6} sm={12}>
                    <Card bg={"dark"} text={'white'}>
                        <img className="img-fluid" src="https://res.cloudinary.com/teamkanaa/image/upload/v1634058932/Kanaa%20Website/Join%20now/1.jpg" alt="" />
                        <Card.Body>
                            <Card.Title>
                                Do you have a passion for volunteering?
                            </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">We are looking for active volunteers !</Card.Subtitle>
                            <Card.Text>
                                Volunteers interested to join and work with Team Kanaa , please fill in your details and interested area of work in our "Volunteer Registration Form”
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="light" href={"https://forms.gle/HpZyVLGkib8q7VMt6"} target="_blank">
                                Click here
                            </Button>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={6} sm={12}>
                    <Card bg={"dark"} text={'white'} className="mt-3">
                        <img className="img-fluid" src="https://res.cloudinary.com/teamkanaa/image/upload/v1634058925/Kanaa%20Website/Join%20now/2.jpg" alt="" />
                        <Card.Body>
                            <Card.Title>
                                Are you someone who can help and assist students to learn?
                            </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                Then here is an opportunity... Get ready to create future doctors.
                            </Card.Subtitle>
                            <Card.Text>
                                Team Kanaa is in need of tutors for training NEET aspirants.
                                Need tutors for Physics, Chemistry and Biology (Medium of instruction : Tamil and/or English)
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="light" href={"https://forms.gle/wJrRWUZGrH5Qw84c6"} target="_blank">
                                Click here
                            </Button>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>

            <TestimonialVol />
        </Container>
    )
}

export default JoinUs
