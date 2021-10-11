import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faHandHoldingHeart, faUsers } from '@fortawesome/free-solid-svg-icons'
const CounterUp = () => {
    return (
        <Container className="text-light text-center">
            <h2 className="my-5 fw-bolder">Numbers that tell our story​</h2>
            <Row xs={1} sm={1} md={3} className="justify-content-around gy-4">
                <Col>
                    <div className="counter-box">
                        <FontAwesomeIcon className="icon" size="2x" icon={faCalendarAlt} />
                        <Card.Body>
                            <Card.Title className="fs-3 fw-bolder"> 50+  </Card.Title>
                            <Card.Text className="fs-5 fw-bolder">
                                Volunteers
                            </Card.Text>
                        </Card.Body>
                    </div>
                </Col>
                <Col>
                    <div className="counter-box">
                        <FontAwesomeIcon className="icon" size="2x" icon={faHandHoldingHeart} />
                        <Card.Body>
                            <Card.Title className="fs-3 fw-bolder">18+</Card.Title>
                            <Card.Text className="fs-5 fw-bolder">
                                Tutors
                            </Card.Text>
                        </Card.Body>
                    </div>
                </Col>
                <Col>
                    <div className="counter-box ">
                        <FontAwesomeIcon className="icon" size="2x" icon={faUsers} />
                        <Card.Body>
                            <Card.Title className="fs-3 fw-bolder">
                                19+
                            </Card.Title>
                            <Card.Text className="fs-5 fw-bolder">
                                Moderators
                            </Card.Text>
                        </Card.Body>
                    </div>
                </Col>
                <Col>
                    <div className="counter-box">
                        <FontAwesomeIcon className="icon" size="2x" icon={faUsers} />
                        <Card.Body>
                            <Card.Title className="fs-3 fw-bolder">
                                40+
                            </Card.Title>
                            <Card.Text className="fs-5 fw-bolder">
                                Students in NEET Classes
                            </Card.Text>
                        </Card.Body>
                    </div>
                </Col>
                <Col>
                    <div className="counter-box">
                        <FontAwesomeIcon className="icon" size="2x" icon={faUsers} />
                        <Card.Body>
                            <Card.Title className="fs-3 fw-bolder">
                                8+
                            </Card.Title>
                            <Card.Text className="fs-5 fw-bolder">
                                Deserving students were referred out of 100+ applicants for college education through foundations
                            </Card.Text>
                        </Card.Body>
                    </div>
                </Col>
                <Col>
                    <div className="counter-box">
                        <FontAwesomeIcon className="icon" size="2x" icon={faUsers} />
                        <Card.Body>
                            <Card.Title className="fs-3 fw-bolder">
                                10+
                            </Card.Title>
                            <Card.Text className="fs-5 fw-bolder">
                                Events
                            </Card.Text>
                        </Card.Body>
                    </div>
                </Col>
            </Row>

        </Container>
    )
}

export default CounterUp
