import React from 'react'
import ImageCarousel from '../components/ImageCarousel';
import AboutUs from "../components/AboutUs"
import { Container, Row, Col } from 'react-bootstrap';
import InfiniteSlider from '../components/InfiniteSlider';
import CounterUp from '../components/CounterUp';
import AdmissionCTA from '../components/AdmissionCTA';
import ActivitiesPane from '../components/ActivitiesPane';
import OurMission from '../components/OurMission';

const Home = () => {
    return (
        <>
            <Container fluid className="mt-5">
                <Row>
                    <Col>
                        <ImageCarousel images={['/images/1.jpg', '/images/2.jpg', '/images/4.jpg']} />
                    </Col>
                </Row>
                <InfiniteSlider />
                <AboutUs />
                <CounterUp />
                <ActivitiesPane />
                <AdmissionCTA />
                <OurMission />
            </Container>
        </>
    )
}

export default Home
