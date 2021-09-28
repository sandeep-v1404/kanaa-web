import React from 'react'
import ImageCarousel from '../components/ImageCarousel';
import AboutUs from "../components/AboutUs"
import { Container, Row, Col } from 'react-bootstrap';
const Home = () => {
    return (
        <>
            <Container fluid className="mt-5">
                <Row>
                    <Col>
                        <ImageCarousel />
                    </Col>
                </Row>
                <AboutUs />
            </Container>
        </>
    )
}

export default Home
