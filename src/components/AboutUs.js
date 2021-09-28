import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import InfoCard from './InfoCard'

const AboutUs = () => {
    return (
        <Container fluid>
            <Row>
                <Col className="primary__background" ><InfoCard /></Col>
                <Col className="primary__background__light" ><InfoCard /></Col>
                <Col className=" primary__background"><InfoCard /></Col>
            </Row>
        </Container>
    )
}

export default AboutUs
