import React from 'react'
import ImageCarousel from '../components/ImageCarousel';
import InfoPane from "../components/InfoPane"
import { Container, Row, Col } from 'react-bootstrap';
import InfiniteSlider from '../components/InfiniteSlider';
import CounterUp from '../components/CounterUp';
import AdmissionCTA from '../components/AdmissionCTA';
import ActivitiesPane from '../components/ActivitiesPane';
import OurMission from '../components/OurMission';
import TestimonialVol from '../components/TestimonialVol';
import TestimonialStudents from '../components/TestimonialStudents';
import Awards from '../components/Awards';
import * as data from "../data"
const Home = () => {
    return (
        <>
            <Container fluid className="mt-5">
                <Row>
                    <Col>
                        <ImageCarousel caption={true} images={data.homeSlider.images} content={data.homeSlider.content} />
                    </Col>
                </Row>
                <InfiniteSlider />
                <InfoPane />
                <CounterUp />
                <ActivitiesPane />
                <AdmissionCTA />
                <OurMission />
                <Awards />
                <TestimonialVol />
                <TestimonialStudents />
            </Container>
        </>
    )
}

export default Home
