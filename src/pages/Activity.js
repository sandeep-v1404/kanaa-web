import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import ImageCarousel from '../components/ImageCarousel';
import * as activities from "../data/Activities.json"

const Activity = ({ match }) => {
    return (

        <Container className="text-light">
            {activities.data.map((activity, idx) => {

                return idx == match.params.id && (<>

                    <Row className="p-5 bg-warning">
                        <Col>
                            <h2 className="fw-bolder text-dark">{activity.heading}</h2>
                        </Col>
                    </Row>
                    <Row className="mt-2 justify-content-around align-items-center " >
                        <Col md={6} sm={12}>
                            <ImageCarousel images={['/images/1.jpg', '/images/2.jpg', '/images/4.jpg']} />
                        </Col>
                        <Col md={6} sm={12}>
                            <Card bg={"dark"} text={'white'}>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </>)
            })}
        </Container >

    )
}

export default Activity
