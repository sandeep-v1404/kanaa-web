import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import * as data from "../data"
const ActivitiesPane = () => {
    const history = useHistory();
    return (
        <Container fluid className="gallery py-5">
            <h2 className="text-center fw-bolder">Activities​</h2>
            <hr />
            <Row md={4} sm={3} xs={1} className="gy-4 justify-content-center align-items-center">
                {
                    data.activities.map((elem, keyIndex) =>
                        <Fragment key={keyIndex}>
                            <Col >
                                <div className="image-card">
                                    <img
                                        className="d-block"
                                        src={elem.images[0]}
                                        alt={elem.altText}
                                    />
                                    <div className="image-description">
                                        <p className="fs-5 fw-bolder">{elem.title}</p>
                                        <Button variant="none" onClick={() =>
                                            history.push(`/activities/${keyIndex}`)
                                        }>
                                            <FontAwesomeIcon className="icon" icon={faLink} />
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                        </Fragment>
                    )
                }
            </Row>

        </Container >
    )
}

export default ActivitiesPane
