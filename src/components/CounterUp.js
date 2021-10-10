import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faHandHoldingHeart, faUsers } from '@fortawesome/free-solid-svg-icons'
const CounterUp = () => {
    return (
        <Container className="text-light text-center">
            <h2 className="my-5 fw-bolder">Numbers that tell our story​</h2>
            <Row xs={1} sm={1} md={3} className="justify-content-around">
                <Col>
                    <div className="counter-box">
                        <FontAwesomeIcon className="icon" size="2x" icon={faCalendarAlt} />
                        <Card.Body>
                            <Card.Title> 50+  </Card.Title>
                            <Card.Text>
                                Volunteers
                            </Card.Text>
                        </Card.Body>
                    </div>
                </Col>
                <Col>
                    <div className="counter-box">
                        <FontAwesomeIcon className="icon" size="2x" icon={faHandHoldingHeart} />
                        <Card.Body>
                            <Card.Title>18+</Card.Title>
                            <Card.Text>
                                Tutors
                            </Card.Text>
                        </Card.Body>
                    </div>
                </Col>
                <Col>
                    <div className="counter-box">
                        <FontAwesomeIcon className="icon" size="2x" icon={faUsers} />
                        <Card.Body>
                            <Card.Title>700+  </Card.Title>
                            <Card.Text>
                                VOLUNTEERS
                            </Card.Text>
                        </Card.Body>
                    </div>
                </Col>
            </Row>

        </Container>
    )
}

export default CounterUp
