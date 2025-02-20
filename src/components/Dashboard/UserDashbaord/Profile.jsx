import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from "../../../assets/Images/logo.webp";
import ticketimg from "../../../assets/Images/ticketimg.jpg";
import SideBar from './SideBar';
import BoxImg from '../../Home/BoxImg';
import boxImg from "../../../assets/Images/boxImg.jpg";
import { Form, Link } from 'react-router';
import FooterBottom from '../../Footer/FooterBottom';


const Profile = () => {
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
                                <div className="col-lg-12  liftedup_stack">
                                    <div className='themeCard mb-4'>
                                        <div className='cardHeading d-flex align-items-center justify-content-between mb-4'>
                                            <h3>User Profile</h3>

                                        </div>
                                        <Form className=''>
                                            <div className="mb-3 row">
                                                <label for="staticEmail" className="col-lg-2 col-12 col-form-label">Name</label>
                                                <div className="col-lg-6 col-12">
                                                    <input type="text" readonly className="form-control" id="staticEmail" value="John Doe" />
                                                </div>
                                            </div>
                                            <div className="mb-3 row">
                                                <label for="staticEmail" className="col-lg-2 col-12 col-form-label">Email</label>
                                                <div className="col-lg-6 col-12">
                                                    <input type="text" readonly className="form-control" id="staticEmail" value="email@example.com" />
                                                </div>
                                            </div>
                                            <div className="mb-3 row">
                                                <label for="phone" className="col-lg-2 col-12 col-form-label">Phone</label>
                                                <div className="col-lg-6 col-12">
                                                    <input type="text" readOnly className="form-control" value="+1654987234" id="phone" />
                                                </div>
                                            </div>
                                            <div className="mb-3 row">
                                                <label for="waddress" className="col-lg-2 col-12 col-form-label">Wallet Address    ( BEP20     )</label>
                                                <div className="col-lg-6 col-12">
                                                    <input type="text" className="form-control" value="#dfgdft45435dfg" id="waddress" />
                                                </div>
                                            </div>
                                            <div className="mb-3 row">
                                                <label for="pphoto" className="col-lg-2 col-12 col-form-label">Profile Photo</label>
                                                <div className="col-lg-6 col-12 d-flex flex-lg-row flex-column gap-1  ">
                                                    <input type="file" />
                                                    <img width={"150px"} src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?t=st=1739962202~exp=1739965802~hmac=60b9d7236ff78cb0b9597974c83f55713a1f5d674ce16effd74f24b9a6102871&w=826" alt="" />
                                                </div>
                                            </div>

                                            <div className='my-5 col-lg-10 col-12  '>
                                                <button className='btn-filled mx-auto'>
                                                    Update
                                                </button>
                                            </div>
                                        </Form>

                                    </div>

                                </div>
                            </Row>

                        </Container>
                    </section>
                    <FooterBottom />
                </Row>
            </Container>
        </>
    )
}

export default Profile