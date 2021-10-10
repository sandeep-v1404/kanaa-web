import React from 'react'
import { Card } from 'react-bootstrap';
import Carousel from 'react-elastic-carousel'

// const Item = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 250px;
//   width: 100%;
//   background-color: rgba(255, 255, 255, 0.7);
//   color: #fff;
//   margin: 0 15px;
//   font-size: 4em;
// `;

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },

];

const Item = ({ content }) => {
    return <>
        <Card style={{ width: "100%" }} className="test-card text-center">
            <div className="test-img">
                <img src="/images/2.jpg" alt="as" />
            </div>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    {content}
                </Card.Text>
            </Card.Body>
        </Card>
    </>
}

const TestimonialVol = () => {
    return (
        <>
            <h2 className="text-center fw-bolder pt-3 my-5 text-light">Volunteer Testimonials</h2>

            <Carousel breakPoints={breakPoints}>
                <Item content="Some quick example text to build on the card title and make up the bulk of
                    the card's content."/>
                <Item content="Some quick example text to build on the card title and make up the bulk of
                    the card's content.Some quick example text to build on the card title and make up the bulk of
                    the card's content."/>
                <Item content="Some quick example text to build on the card title and make up the bulk of
                    the card's content.Some quick example text to build on the card title and make up the bulk of
                    the card's content.Some quick example text to build on the card title and make up the bulk of
                    the card's content."/>
                <Item content="Some quick example text to build on the card title and make up the bulk of
                    the card's content.Some quick example text to build on the card title and make up the bulk of
                    the card's content.Some quick example text to build on the card title and make up the bulk of
                    the card's content..Some quick example text to build on the card title and make up the bulk of
                    the card's content."/>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </Carousel>
        </>
    )
}

export default TestimonialVol
