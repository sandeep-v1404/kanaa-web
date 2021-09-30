import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Activities = () => {
    return (
        <Container fluid className="gallery py-5">
            <h2 className="text-center fw-bolder">Activities​</h2>
            <hr />
            <Row md={4} sm={3} xs={1} className="gy-4">
                <Col>
                    <div className="image-card">
                        <img
                            className="d-block w-100 img-fluid"
                            src="/images/2.jpg"
                            alt="Second slide"
                        />
                        <div className="image-description">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, dolorem?</p>
                        </div>
                    </div>
                </Col>

            </Row>
        </Container>
    )
}

export default Activities
