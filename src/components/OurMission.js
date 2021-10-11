import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import * as data from "../data"
const OurMission = () => {
    return (
        <Container fluid className="text-light">
            <h2 className="text-center fw-bolder pt-3">Our Mission</h2>
            <hr />
            <Row md={4} sm={3} xs={1} className="gy-4">
                {
                    data.mission.map((elem, idx) =>
                        <Col sm={12} md={4} key={idx}>
                            <Card.Body>
                                <Row className="justify-content-center align-items-center">
                                    <Col xs={12} sm={12} md={4} className="text-center mission_icon">
                                        <img src="/images/giphy.gif" alt="loading..." />
                                    </Col>
                                    <Col className="mission_desc" sm={12} md={8}>
                                        <Card.Title>{elem.title}</Card.Title>
                                        <Card.Text>
                                            {elem.description}
                                        </Card.Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Col>
                    )
                }
            </Row>
        </Container >
    )
}

export default OurMission
