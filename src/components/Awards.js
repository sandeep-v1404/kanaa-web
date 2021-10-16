import React from 'react'
import { Card } from 'react-bootstrap';
import Carousel from 'react-elastic-carousel'
import * as data from "../data"

const breakPoints = [
    { width: 1, itemsToShow: 1 },
];

const Awards = () => {
    return (
        <>
            <h2 className="text-center fw-bolder pt-3 my-5 text-light">Awards </h2>

            <Carousel breakPoints={breakPoints}>
                {data.awards.map((elem, idx) =>
                    <Card key={elem.id} style={{ width: "100%" }} className="award-card text-center">
                        <div className="test-img">
                            <img src={elem.imageURL} alt="as" />
                        </div>
                        <Card.Body>
                            <Card.Title className="heading fw-bolder">{elem.date} </Card.Title>
                            <Card.Text className="description-big ">
                                {elem.heading}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )}
            </Carousel>
        </>
    )
}

export default Awards
