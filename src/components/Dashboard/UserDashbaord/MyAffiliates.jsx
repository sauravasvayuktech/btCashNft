import React from 'react'
import { Col, Container, Dropdown, Pagination, Row } from 'react-bootstrap'
import SideBar from './SideBar'
import { Link } from 'react-router'

const MyAffiliates = () => {
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
                                <Col lg={12} className='mb-4 liftedup_stack'>
                                    <div className='themeCard '>
                                        <div className='cardHeading d-flex align-items-center justify-content-between mb-4'>
                                            <h3>Recent Affiliatess</h3>
                                            <div className='d-flex align-items-center gap-3'>
                                                <Dropdown >
                                                    <Dropdown.Toggle variant="warning" id="dropdown-basic">
                                                        Levels
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>

                                            </div>
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
                                            <div className='d-flex align-items-center justify-content-center'>

                                            <Pagination>
                                                <Pagination.First />
                                                <Pagination.Prev />
                                                <Pagination.Item>{1}</Pagination.Item>
                                                <Pagination.Ellipsis />

                                                <Pagination.Item>{10}</Pagination.Item>
                                                <Pagination.Item>{11}</Pagination.Item>
                                                <Pagination.Item active>{12}</Pagination.Item>
                                                <Pagination.Item>{13}</Pagination.Item>
                                                <Pagination.Item disabled>{14}</Pagination.Item>

                                                <Pagination.Ellipsis />
                                                <Pagination.Item>{20}</Pagination.Item>
                                                <Pagination.Next />
                                                <Pagination.Last />
                                            </Pagination>
                                            </div>

                                        </Row>

                                    </div>
                                </Col>

                            </Row>

                        </Container>
                    </section>
                    <div className="footer-bottom py-4" style={{ background: '#2a2a2a' }}>
                        <p className="mb-0 text-center">
                            Copyright 2025{" "}
                            <span style={{ color: "#E9A031" }}>
                                <Link to="/">Btcash NFT</Link>
                            </span>{" "}
                            All Rights Reserved.
                        </p>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default MyAffiliates