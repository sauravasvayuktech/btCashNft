import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SideBar from './SideBar'

const Layout = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <SideBar />

                    <section className="dashboard px-0">
                        <div className="coverImage" style={{ backgroundImage: `url(https://img.freepik.com/premium-photo/man-with-hood-cap-white-foam_1266032-2584.jpg?w=1800)` }}>

                        </div>
                        <div className="container-fluid px-3 px-lg-4 px-md-4 px-2">
                            <div className="row flex-lg-row flex-column-reverse dashboard_item">
                                <div className="col-lg-9 pt-0 pt-lg-5 pt-md-5 pb-5 liftedup_stack">
                                    <div className='themeCard h-100'>
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
                            <h6 className='mb-2 text_primary'>Affiliate Income</h6>
                            <h3>
                                $ 100
                            </h3>
                        </div>
                    </Col>
                    <Col xs={3}>
                    <div>
                            <h6 className='mb-2 text_primary'>Available Amount</h6>
                            <h3>
                                $ 100
                            </h3>
                        </div>
                    </Col>
                    <Col xs={3}>
                    <div>
                            <h6 className='mb-2 text_primary'>Available Amount</h6>
                            <h3>
                                $ 100
                            </h3>
                        </div>
                    </Col>
                    <Col xs={3}>
                    <div>
                            <h6 className='mb-2 text_primary'>Available Amount</h6>
                            <h3>
                                $ 100
                            </h3>
                        </div>
                    </Col>
                                        </Row>

                                    </div>

                                </div>
                                <div className="col-lg-3 col-md-3 col-12">

                                </div>
                            </div>
                        </div>
                    </section>
                </Row>
            </Container>
        </>
    )
}

export default Layout