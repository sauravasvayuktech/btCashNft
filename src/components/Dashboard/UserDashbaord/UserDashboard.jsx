import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from "../../../assets/Images/logo.webp";
import ticketimg from "../../../assets/Images/ticketimg.jpg";
import SideBar from './SideBar';
import BoxImg from '../../Home/BoxImg';
import boxImg from "../../../assets/Images/boxImg.jpg";
import { Link } from 'react-router';
import Rewards from './Rewards';

const UserDashboard = () => {
    return (
        <>
            <div className="container-fluid px-3 px-lg-4 px-md-4 px-2">
                <div className="row flex-lg-row flex-column-reverse dashboard_item">
                    <div className="col-lg-9  liftedup_stack">
                        <div className='themeCard mb-4'>
                            <div className='cardHeading d-flex align-items-center justify-content-between mb-4'>
                                <h3>Overall Portfolo</h3>
                                <div className='d-flex align-items-center gap-3'>
                                    <button className='btn-hollow'>
                                        Withdraw
                                    </button>
                                    <button className='btn-filled'>
                                        Deposit +
                                    </button>
                                </div>
                            </div>
                            <Row className='portfolioInfo '>
                                <Col xs={3}>
                                    <div>
                                        <p className='mb-2 text_primary'>Affiliate Income</p>
                                        <h2 className='fw-bold'>
                                            <sup className='fs-6'> $ </sup> 100
                                        </h2>
                                    </div>
                                </Col>
                                <Col xs={3}>
                                    <div>
                                        <p className='mb-2 text_primary'>Available Amount</p>
                                        <h2 className='fw-bold'>
                                            <sup className='fs-6'> $ </sup> 100
                                        </h2>
                                    </div>
                                </Col>
                                <Col xs={3}>
                                    <div>
                                        <p className='mb-2 text_primary'>Available Amount</p>
                                        <h2 className='fw-bold'>
                                            <sup className='fs-6'> $ </sup> 100
                                        </h2>
                                    </div>
                                </Col>
                                <Col xs={3}>
                                    <div>
                                        <p className='mb-2 text_primary'>Available Amount</p>
                                        <h2 className='fw-bold'>
                                            <sup className='fs-6'> $ </sup> 100
                                        </h2>
                                    </div>
                                </Col>
                            </Row>

                        </div>
                        <Row>
                            <Col lg={12} className='mb-4'>
                                <div className='themeCard '>
                                    <div className='cardHeading d-flex align-items-center justify-content-between mb-4'>
                                        <h3>Active Contests</h3>
                                        <button className='btn-hollow'>
                                            View All
                                        </button>
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

                                </div>
                            </Col>

                        </Row>
                        <Row>
                            <Col lg={12} className='mb-4'>
                                <div className='themeCard '>
                                    <div className='cardHeading d-flex align-items-center justify-content-between mb-4'>
                                        <h3>Recent Affiliatess</h3>
                                        <button className='btn-hollow'>
                                            View All
                                        </button>
                                    </div>
                                    <Row className='Affilatemembers '>

                                        <table class="table table-dark table-striped">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Sr. </th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Sponser Email</th>
                                                    <th scope="col">Level</th>
                                                    <th scope="col">Joining Date</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>BT0947586</td>
                                                    <td>rajesh*******861232@gmail.com
                                                    </td>
                                                    <td>team.******@gmail.com
                                                    </td>
                                                    <td>1</td>
                                                    <td>
                                                        04/11/2024</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>BT0947586</td>
                                                    <td>rajesh*******861232@gmail.com
                                                    </td>
                                                    <td>team.******@gmail.com
                                                    </td>
                                                    <td>1</td>
                                                    <td>
                                                        04/11/2024</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>BT0947586</td>
                                                    <td>rajesh*******861232@gmail.com
                                                    </td>
                                                    <td>team.******@gmail.com
                                                    </td>
                                                    <td>1</td>
                                                    <td>
                                                        04/11/2024</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>BT0947586</td>
                                                    <td>rajesh*******861232@gmail.com
                                                    </td>
                                                    <td>team.******@gmail.com
                                                    </td>
                                                    <td>1</td>
                                                    <td>
                                                        04/11/2024</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>BT0947586</td>
                                                    <td>rajesh*******861232@gmail.com
                                                    </td>
                                                    <td>team.******@gmail.com
                                                    </td>
                                                    <td>1</td>
                                                    <td>
                                                        04/11/2024</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>BT0947586</td>
                                                    <td>rajesh*******861232@gmail.com
                                                    </td>
                                                    <td>team.******@gmail.com
                                                    </td>
                                                    <td>1</td>
                                                    <td>
                                                        04/11/2024</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>BT0947586</td>
                                                    <td>rajesh*******861232@gmail.com
                                                    </td>
                                                    <td>team.******@gmail.com
                                                    </td>
                                                    <td>1</td>
                                                    <td>
                                                        04/11/2024</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>BT0947586</td>
                                                    <td>rajesh*******861232@gmail.com
                                                    </td>
                                                    <td>team.******@gmail.com
                                                    </td>
                                                    <td>1</td>
                                                    <td>
                                                        04/11/2024</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>BT0947586</td>
                                                    <td>rajesh*******861232@gmail.com
                                                    </td>
                                                    <td>team.******@gmail.com
                                                    </td>
                                                    <td>1</td>
                                                    <td>
                                                        04/11/2024</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>BT0947586</td>
                                                    <td>rajesh*******861232@gmail.com
                                                    </td>
                                                    <td>team.******@gmail.com
                                                    </td>
                                                    <td>1</td>
                                                    <td>
                                                        04/11/2024</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>BT0947586</td>
                                                    <td>rajesh*******861232@gmail.com
                                                    </td>
                                                    <td>team.******@gmail.com
                                                    </td>
                                                    <td>1</td>
                                                    <td>
                                                        04/11/2024</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>BT0947586</td>
                                                    <td>rajesh*******861232@gmail.com
                                                    </td>
                                                    <td>team.******@gmail.com
                                                    </td>
                                                    <td>1</td>
                                                    <td>
                                                        04/11/2024</td>
                                                </tr>

                                            </tbody>
                                        </table>

                                    </Row>

                                </div>
                            </Col>

                        </Row>
                    </div>
                    <div className="col-lg-3 col-md-3 col-12  liftedup_stack mb-3">
                        <Rewards />
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserDashboard