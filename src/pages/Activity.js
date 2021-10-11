import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import ImageCarousel from '../components/ImageCarousel';
import * as data from "../data"

const Activity = ({ match }) => {
    return (

        <Container fluid className="text-light">
            {data.activities.map((activity, idx) => {
                return (idx == parseInt(match.params.id)) && (<>
                    <Row className="bg-warning" key={idx}>
                        <Col>
                            <h2 className="p-md-5 p-2 fw-bolder text-dark">{activity.title}</h2>
                        </Col>
                    </Row>
                    <Row className="mt-2 justify-content-around align-items-center mb-5" >
                        <Col md={6} sm={12} >
                            <ImageCarousel images={activity.images} caption={false} />
                        </Col>
                        <Col md={6} sm={12}>
                            <Card bg={"dark"} text={'white'}>
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
                </>)
            })}
        </Container >

    )
}

export default Activity
