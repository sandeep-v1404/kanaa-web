import React from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap';

const AdmissionForm = () => {
    return (
        <Container fluid>
            <Row className="bg-warning justify-content-around  align-items-center py-5">
                <Col md={{ span: 6, offset: 1 }}>
                    <h1 className="fw-bolder">
                        READY TO BECOME A VOLUNTEER?
                    </h1>
                </Col>
                <Col md={{ span: 3, offset: 2 }}>
                    <Button variant="light">
                        Join Now
                    </Button>
                </Col>
            </Row>
        </Container >
    )
}

export default AdmissionForm
