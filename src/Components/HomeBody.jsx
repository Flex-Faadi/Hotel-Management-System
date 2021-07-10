import React, { useEffect, useState } from 'react'
import { Col, Row, ListGroup, Form, FormControl, Button, Card } from 'react-bootstrap'
import {FaParking } from 'react-icons/fa';
import { MdFreeBreakfast } from 'react-icons/md';
import { getHoteldata } from '../store/actions'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'


function HomeBody() {
    const dispatch = useDispatch()
    const state = useSelector(state => state);
    const hotel_Data = state.hoteldata;
    
    useEffect(() => {
        dispatch(getHoteldata())
    }, [])
    console.log("Hotels ", hotel_Data)
    return (
        <div>
            <div className="container my-5">
                <h2 style={{ width: "240px" }} className="text-success border-bottom border-success">Filter Your Hotel</h2>
                <Row>
                    <Col xs={12} md={4} className="my-2">
                        <h3>Search by Name</h3>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Enter Hotel Name"
                                className="mr-2"
                                aria-label="Hotel"
                            />
                            <Button variant="btn btn-success">Search</Button>
                        </Form>
                    </Col>
                    <Col xs={12} md={4} className="my-2">
                        <h3>Search By Rooms</h3>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Rooms"
                                className="mr-2"

                                aria-label="Search"
                            />
                            <Button variant="btn btn-success">Search</Button>
                        </Form>
                    </Col>
                    <Col xs={12} md={4} className="my-2">
                        <h3>Search By Price</h3>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search By Price"
                                className="mr-2"
                                aria-label="Search"
                            />
                            <Button variant="btn btn-success">Search</Button>
                        </Form>
                    </Col>

                </Row>
                <Row>
                    {hotel_Data ?
                        hotel_Data.map((e, i) => {
                            return (

                                <Col key={i} xs={12} md={4}>
                                    <Card style={{ width: '18rem'}} className="mx-4 my-2">
                                        <Card.Img style={{ height: '200px'}} variant="top" src={e.img}/>
                                        <Card.Body className="text-center">
                                            <Card.Title>{e.hotel_name}</Card.Title>
                                            <ListGroup variant="flush">
                                                <ListGroup.Item>{e.no_of_rooms}</ListGroup.Item>
                                                <ListGroup.Item>{e.per_day_price}</ListGroup.Item>
                                                <ListGroup.Item>
                                                    <strong>SERVICES</strong>
                                                    <br />

                                                    <br />
                                                    <span><FaParking />Private Parking</span> <br />
                                                    <span><MdFreeBreakfast /> Lunch &amp; Breakfast</span>
                                                </ListGroup.Item>
                                            </ListGroup>
                                            <Button variant="success">BOOK NOW</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        }) : null
                    }
                </Row>
            </div>
        </div>
    )
}

export default HomeBody
