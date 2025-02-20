import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SideBar from './SideBar';
import ticketimg from "../../../assets/Images/ticketimg.jpg";
import { Link } from 'react-router';
import Rewards from './Rewards';
import FooterBottom from '../../Footer/FooterBottom';

const MyTickets = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <SideBar />

                    <section className="dashboard px-0">
                        <div className="coverImage" style={{ backgroundImage: `url(https://img.freepik.com/premium-photo/abstract-digital-wave-pattern-with-vibrant-colors-dots_1176110-5032.jpg?w=1380)` }}>

                        </div>
                        <Container fluid>
                            <Row>
                                <div className="col-lg-9  liftedup_stack">
                                    <div className='themeCard mb-4'>
                                        <div className='cardHeading d-flex align-items-center justify-content-between mb-4'>
                                            <h3>My Contests</h3>

                                        </div>
                                        <Row>
                                            <Col lg={12} className='mb-4'>
                                                <div className='themeCard '>
                                                    <div className='cardHeading d-flex align-items-center justify-content-between mb-4'>
                                                        <h3>Active Contests</h3>
                                                       
                                                    </div>
                                                    <Row className='portfolioInfo '>
                                                        <Col xs={4} className='mb-4'>
                                                            <img src={ticketimg} height="100px" width={"100%"} />
                                                        </Col>
                                                        <Col xs={4} className='mb-4'>
                                                            <img src={ticketimg} height="100px" width={"100%"} />
                                                        </Col>
                                                        <Col xs={4} className='mb-4'>
                                                            <img src={ticketimg} height="100px" width={"100%"} />
                                                        </Col>
                                                        <Col xs={4} className='mb-4'>
                                                            <img src={ticketimg} height="100px" width={"100%"} />
                                                        </Col>
                                                        <Col xs={4} className='mb-4'>
                                                            <img src={ticketimg} height="100px" width={"100%"} />
                                                        </Col>
                                                        <Col xs={4} className='mb-4'>
                                                            <img src={ticketimg} height="100px" width={"100%"} />
                                                        </Col>
                                                        <Col xs={4} className='mb-4'>
                                                            <div className='ticket bg-white '>
                                                                
                                                                </div>
                                                        </Col>

                                                    </Row>
                                                    <div className='text-end'>
                                                    <button className='btn-hollow'>
                                                            Load More
                                                        </button>
                                                    </div>

                                                </div>
                                            </Col>
                                            <Col lg={12} className='mb-4'>
                                                <div className='themeCard '>
                                                    <div className='cardHeading d-flex align-items-center justify-content-between mb-4'>
                                                        <h3>Completed Contests</h3>
                                                   
                                                    </div>
                                                    <Row className='portfolioInfo '>
                                                        <Col xs={4} className='mb-4'>
                                                            <img src={ticketimg} height="100px" width={"100%"} />
                                                        </Col>
                                                        <Col xs={4} className='mb-4'>
                                                            <img src={ticketimg} height="100px" width={"100%"} />
                                                        </Col>
                                                        <Col xs={4} className='mb-4'>
                                                            <img src={ticketimg} height="100px" width={"100%"} />
                                                        </Col>
                                                        <Col xs={4} className='mb-4'>
                                                            <img src={ticketimg} height="100px" width={"100%"} />
                                                        </Col>
                                                        <Col xs={4} className='mb-4'>
                                                            <img src={ticketimg} height="100px" width={"100%"} />
                                                        </Col>
                                                        <Col xs={4} className='mb-4'>
                                                            <img src={ticketimg} height="100px" width={"100%"} />
                                                        </Col>

                                                    </Row>
                                                    <div className='text-end'>
                                                    <button className='btn-hollow'>
                                                            Load More
                                                        </button>
                                                    </div>

                                                </div>
                                            </Col>

                                        </Row>


                                    </div>

                                </div>
                                <Col lg={3} className='liftedup_stack'>
                                <Rewards/>
                                </Col>
                            </Row>

                        </Container>
                    </section>
                    <FooterBottom/>
                </Row>
            </Container>
        </>
    )
}

export default MyTickets