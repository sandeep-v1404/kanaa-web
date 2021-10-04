import React from 'react'
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom'

const Navigationbar = () => {

    return (
        <Container fluid className='navigation'>
            <Row>
                <Col>

                    <Navbar collapseOnSelect bg="dark" variant="dark" expand="sm" fixed="top">
                        <Container>
                            <Navbar.Brand as={Link} to="/">
                                <img src="/images/eng-logo.png" className="img-fluid" width="75px" alt="" />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ms-auto">
                                    <Nav.Link className="text-uppercase fw-bolder" as={Link} to="/">
                                        Home
                                    </Nav.Link>
                                    <Nav.Link className="text-uppercase fw-bolder" as={Link} to="/admission">
                                        Admission
                                    </Nav.Link>
                                    <Nav.Link className="text-uppercase fw-bolder" as={Link} to="/activities">
                                        Activities
                                    </Nav.Link>
                                    <Nav.Link className="text-uppercase fw-bolder" as={Link} to="/about">
                                        About Us
                                    </Nav.Link>
                                    <Nav.Link className="text-uppercase fw-bolder" as={Link} to="/join-now">
                                        Join Now
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    )
}

export default Navigationbar
