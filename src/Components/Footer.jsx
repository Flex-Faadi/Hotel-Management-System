import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import './Footer.css'

function Footer() {
    return (
        <footer className="border-top bg-white myMainFooter">
            <div className="py-4 footer-a">
                <Container>
                    <Row className="py-1">
                        <Col xs={12} md={4} lg={4}>
                            <ul className="list-unstyled">
                                <h6 className="heading">HoneyMoon</h6>
                                <li>Luxuries</li>
                                <li>Ideal</li>
                                <li>Best For Visit</li>
                                <li>Services</li>
                                <li>Packages</li>
                            </ul>
                        </Col>
                       
                        <Col xs={12} md={4} lg={4}>
                            <ul className="list-unstyled">
                                <h6 className="heading">Visit</h6>
                                <li>School Trip</li>
                                <li>University Convocatoion</li>
                                <li>College Parties</li>
                                <li>Music Night</li>
                                <li>Tourism</li>
                            </ul>
                        </Col>
                        <Col xs={12} md={4} lg={4}>
                            <ul className="list-unstyled">
                                <h6 className="heading">Facilities</h6>
                                <li>Swimming pools</li>
                                <li>Gyms</li>
                                <li>Workings</li>
                                <li>Yoga activities</li>
                                <li>Five Star Nights</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="py-3 mx-5 d-flex flex-row flex-wrap text-center align-items-center justify-content-around">
                <div>
                    <h5>Go For Apps</h5>
                    <div>
                        <img width="130px" src="https://z.nooncdn.com/s/app/com/common/images/logos/app-store.svg" alt="" />
                        <img width="130px" src="https://z.nooncdn.com/s/app/com/common/images/logos/google-play.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className="bg-dark text-light d-flex d-row justify-content-around align-items-center flex-wrap border-top">
                <div>
                    <p className="text-center pt-3">&copy; 2021 Bookers.pk. All Right Reserved</p>
                </div>
                {/* <div>
                    <ul className="list-unstyled d-flex d-row flex-wrap justify-content-evenly footerText">
                        <li className="mx-2 mt-2">Five Star</li>
                        <li className="mx-2 mt-2">Contact</li>
                        <li className="mx-2 mt-2">Luxuries</li>
                        <li className="mx-2 mt-2">Bridal Shower</li>
                        <li className="mx-2 mt-2">Wedding nights</li>
                    </ul>
                </div> */}
            </div>
        </footer>
    )
}

export default Footer