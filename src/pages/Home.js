import React from 'react'
import ImageCarousel from '../components/ImageCarousel';
import AboutUs from "../components/AboutUs"
import { Container, Row, Col } from 'react-bootstrap';
import InfiniteSlider from '../components/InfiniteSlider';
import CounterUp from '../components/CounterUp';
import AdmissionCTA from '../components/AdmissionCTA';
import Activities from '../components/Activities';
const Home = () => {
    return (
        <>
            <Container fluid className="mt-5">
                <Row>
                    <Col>
                        <ImageCarousel />
                    </Col>
                </Row>
                <InfiniteSlider />
                <AboutUs />
                <CounterUp />
                <Activities />
                <AdmissionCTA />
            </Container>
        </>
    )
}

export default Home
