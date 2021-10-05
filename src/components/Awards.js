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
];

const Item = () => {
    return <>
        <Card style={{ width: "100%" }} className="test-card text-center">
            <div className="test-img">
                <img src="/images/2.jpg" alt="as" />
            </div>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    </>
}

const Awards = () => {
    return (
        <>
            <h2 className="text-center fw-bolder pt-3 my-5 text-light">Awards </h2>

            <Carousel breakPoints={breakPoints}>
                <Item>
                    <img src="/images/1.jpg" alt="igm" className="corousel-img" />
                    <div className="corousel-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, iure?</p>
                    </div>
                </Item>
                <Item>Two</Item>
                <Item>Three</Item>
                <Item>Four</Item>
                <Item>Five</Item>
                <Item>Six</Item>
                <Item>Seven</Item>
                <Item>Eight</Item>
            </Carousel>
        </>
    )
}

export default Awards
