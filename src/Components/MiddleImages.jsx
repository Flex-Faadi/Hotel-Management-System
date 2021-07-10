import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import './style.css'
function MiddleImages() {
    return (
        <div className="container my-5 myMiddleImg">
            <Row>
                <Col xs={12} md={4}>
                    <Card className="my-2">
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1523699289804-55347c09047d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvdGVsc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                        <Card.Body>
                            <Card.Text className="text-center">
                                BeatyFull View
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={4}>
                    <Card className="my-2">
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1544124499-58912cbddaad?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGhvdGVsc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                        <Card.Body>
                            <Card.Text className="text-center">
                                BeatyFull View
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={4}>
                    <Card className="my-2">
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1563911302283-d2bc129e7570?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGhvdGVsc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                        <Card.Body>
                            <Card.Text className="text-center">
                                BeatyFull View
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default MiddleImages
