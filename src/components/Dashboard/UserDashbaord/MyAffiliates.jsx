import React from 'react'
import { Col, Container, Dropdown, Pagination, Row } from 'react-bootstrap'
import SideBar from './SideBar'
import { Link } from 'react-router'
import FooterBottom from '../../Footer/FooterBottom'
import MobileFooter from '../../Footer/MobileFooter'

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
                                                <select className="form-select" aria-label="Default select example">
                                                    <option selected>Levels</option>
                                                    <option value="1">Level 1</option>
                                                    <option value="2">Level 2</option>
                                                    <option value="3">Level 3</option>
                                                </select>
                                            </div>
                                        </div>
                                        <Row className='Affilatemembers table-responsive'>

                                            <table className="table table-dark table-striped">
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
                                            <div className='d-flex align-items-center justify-content-end mt-3'>

                                                <Pagination>
                                                    <Pagination.First />
                                                    <Pagination.Prev />
                                                    <Pagination.Item>{1}</Pagination.Item>
                                                    

                                                    
                                                    <Pagination.Item active>{2}</Pagination.Item>
                                                    
                                                    

                                                    
                                                    <Pagination.Item>{3}</Pagination.Item>
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
                    <MobileFooter/>
                    <FooterBottom />
                </Row>
            </Container>
        </>
    )
}

export default MyAffiliates