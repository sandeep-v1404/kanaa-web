import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import TestimonialStudents from '../components/TestimonialStudents';
import * as data from "../data"
const Admission = () => {
    return (
        <>
            <Container fluid className="mt-5">
                <Row className="p-3 p-md-5 bg-warning">
                    <Col>
                        <h2 className="fw-bolder text-dark">Admission</h2>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row style={{ marginTop: "10px" }} className="justify-content-around align-items-center ">
                    <Col sm={12}>
                        <img src="https://res.cloudinary.com/teamkanaa/image/upload/v1634057794/Kanaa%20Website/Awards/Admission.jpg" className="img-fluid" alt="loading..." />
                    </Col>
                    <Col sm={12}>
                        <Card bg={"dark"} text={'white'}>
                            <Card.Body>
                                <Card.Title>
                                    Kanaa Dream centre
                                </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    Kanaa Dream centre is our first and foremost project which fulfills our ultimate goal of reaching the under privileged students to attain their future goals in their higher education.
                                </Card.Subtitle>
                                <Card.Text>
                                    We are helping the students who are aspiring to become doctors by providing then free NEET coaching classes. We are shortlisting the students and guiding them with the help of our team's well equipped trainers, moderators and volunteers. We have already completed two batches successfully.
                                    And also, we are lending our helping hands to the students who are in need to continue their higher education by referring them to the foundations as our core members are from the same situation. We are helping the ones who are like us as many are not aware of these information on how to continue their higher studies.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={{ marginTop: "100px" }} className="justify-content-around ">
                    <Col md={6} sm={12}>
                        <Card bg={"dark"} text={'white'}>
                            <img src="/images/admission1.gif" className="img-fluid admission-image" alt="loading..." />
                            <Card.Body>
                                <Card.Title className="fw-bolder">Neet Free Virtual Coaching class</Card.Title>
                                <Card.Text>

                                    Dear NEET Aspirants,<br />
                                    <br />

                                    You are the future doctors responsible to serve our society!! <br />
                                    <br />

                                    And Team Kanaa is here to keep the fire burning in you alive !! <br />
                                    <br />

                                    New registrations are open for NEET batch of 2022 !! <br />
                                    <br />

                                    Register now to join the classes of our finest tutors!! <br />
                                    <br />

                                    Fill in the form and take up the first step in achieving your dreams. <br />
                                    <br />
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="light" href={data.admissionOneFormLink} target="_blank">
                                    Join Now
                                </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={6} sm={12}>
                        <Card bg={"dark"} text={'white'} className="mt-sm-3">
                            <img src="/images/admission2.gif" className="img-fluid admission-image" alt="loading..." />
                            <Card.Body>
                                <Card.Title className="fw-bolder">
                                    College education Referral and Assistance Program
                                </Card.Title>
                                <Card.Text>

                                    If you are a student with financial difficulties to get into college, <br />
                                    <br />

                                    we can help you get into good colleges through NGOs and foundations partnered with respective colleges.<br />
                                    <br />


                                    We acts as a bridge , and shortlist your profile and send deserving candidates to the respective foundations and they help you further with the admission process.<br />
                                    <br />

                                    Check out the eligibility criteria in the "Higher Education Referral and Assistance Program" form and apply now<br />
                                    <br />
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="light" href={data.admissionTwoFormLink} target="_blank">
                                    Join Now
                                </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <TestimonialStudents />
            </Container>
        </>
    )
}

export default Admission
