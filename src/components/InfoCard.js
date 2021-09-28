import React from 'react'
import { Card, Button } from 'react-bootstrap'

const InfoCard = () => {
    return (
        <div>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="none">Go somewhere</Button>
            </Card.Body>
        </div>
    )
}

export default InfoCard
