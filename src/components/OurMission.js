import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

const OurMission = () => {
    return (
        <Container fluid className="text-light">
            <h2 className="text-center fw-bolder pt-3">Our Mission</h2>
            <hr />
            <Row md={4} sm={3} xs={1} className="gy-4">
                <Col sm={12} md={4} >
                    <Card.Body>
                        <Row className="justify-content-center align-items-center">
                            <Col xs={12} sm={12} md={4} className="text-center mission_icon">
                                <FontAwesomeIcon className="icon" icon={faCalendarAlt} size="2x" />
                            </Col>
                            <Col className="mission_desc" sm={12} md={8}>
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                </Col>
                <Col sm={12} md={4} >
                    <Card.Body>
                        <Row className="justify-content-center align-items-center">
                            <Col xs={12} sm={12} md={4} className="text-center mission_icon">
                                <FontAwesomeIcon className="icon" icon={faCalendarAlt} size="2x" />
                            </Col>
                            <Col className="mission_desc" sm={12} md={8}>
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                </Col>
                <Col sm={12} md={4}>
                    <Card.Body>
                        <Row className="justify-content-center align-items-center">
                            <Col xs={12} sm={12} md={4} className="text-center mission_icon">
                                <FontAwesomeIcon className="icon" icon={faCalendarAlt} size="2x" />
                            </Col>
                            <Col className="mission_desc" sm={12} md={8}>
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                </Col>
                <Col sm={12} md={4} >
                    <Card.Body>
                        <Row className="justify-content-center align-items-center">
                            <Col xs={12} sm={12} md={4} className="text-center mission_icon">
                                <FontAwesomeIcon className="icon" icon={faCalendarAlt} size="2x" />
                            </Col>
                            <Col className="mission_desc" sm={12} md={8}>
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                </Col>
                <Col sm={12} md={4} >
                    <Card.Body>
                        <Row className="justify-content-center align-items-center">
                            <Col xs={12} sm={12} md={4} className="text-center mission_icon">
                                <FontAwesomeIcon className="icon" icon={faCalendarAlt} size="2x" />
                            </Col>
                            <Col className="mission_desc" sm={12} md={8}>
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                </Col>
                <Col sm={12} md={4} >
                    <Card.Body>
                        <Row className="justify-content-center align-items-center">
                            <Col xs={12} sm={12} md={4} className="text-center mission_icon">
                                <FontAwesomeIcon className="icon" icon={faCalendarAlt} size="2x" />
                            </Col>
                            <Col className="mission_desc" sm={12} md={8}>
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    )
}

export default OurMission
