import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import ImageCarousel from '../components/ImageCarousel';
import * as data from "../data"

const Activities = () => {
    return (
        <Container fluid className="text-light">
            <Row className="p-3 p-md-5 bg-warning">
                <Col>
                    <h2 className="fw-bolder text-dark">Activities</h2>
                </Col>
            </Row>
            {data.activities.map((activity, idx) =>
                <Row className="mt-2 justify-content-around align-items-center mb-5" >
                    <Col md={6} sm={12} >
                        <ImageCarousel images={activity.images} caption={false} autoChange={false} />
                    </Col>
                    <Col md={6} sm={12} >
                        <Card bg={"dark"} text={'white'} >
                            <Card.Body>
                                <Card.Title className="fw-bolder fs-4">{activity.title}</Card.Title>
                                {activity.quote &&
                                    <Card.Subtitle className="mb-2 fs-5 text-muted">"{activity.quote}"</Card.Subtitle>
                                }
                                <Card.Text className="fs-5">
                                    {activity.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            )}
        </Container>
    )
}

export default Activities
