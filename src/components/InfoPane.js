import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import * as data from "../data"
const AboutUs = () => {
    return (
        <Container fluid>
            <Row >
                {
                    data.info.map((elem, idx) => <Col sm={12} md={4} className={idx % 2 === 0 ? "primary__background" : "primary__background__light"} >
                        <Card.Body>
                            <Card.Title>{elem.title}</Card.Title>
                            <Card.Text>
                                {elem.description}
                            </Card.Text>
                        </Card.Body>
                    </Col>)
                }
            </Row>
        </Container>
    )
}

export default AboutUs
