import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from "../../../assets/Images/logo.webp";
import ticketimg from "../../../assets/Images/ticketimg.jpg";
import SideBar from './SideBar';
import BoxImg from '../../Home/BoxImg';
import boxImg from "../../../assets/Images/boxImg.jpg";
import { Form, Link } from 'react-router';


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
                                        <Form>
                                            <div class="mb-3 row">
                                                <label for="staticEmail" class="col-sm-2 col-form-label">Name</label>
                                                <div class="col-sm-6">
                                                    <input type="text" readonly class="form-control" id="staticEmail" value="John Doe" />
                                                </div>
                                            </div>
                                            <div class="mb-3 row">
                                                <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                                                <div class="col-sm-6">
                                                    <input type="text" readonly class="form-control" id="staticEmail" value="email@example.com" />
                                                </div>
                                            </div>
                                            <div class="mb-3 row">
                                                <label for="phone" class="col-sm-2 col-form-label">Phone</label>
                                                <div class="col-sm-6">
                                                    <input type="text" readOnly class="form-control" value="+1654987234" id="phone" />
                                                </div>
                                            </div>
                                            <div class="mb-3 row">
                                                <label for="waddress" class="col-sm-2 col-form-label">Wallet Address    ( BEP20     )</label>
                                                <div class="col-sm-6">
                                                    <input type="text" class="form-control" value="#dfgdft45435dfg" id="waddress" />
                                                </div>
                                            </div>
                                            <div class="mb-3 row">
                                                <label for="pphoto" class="col-sm-2 col-form-label">Profile Photo</label>
                                                <div class="col-sm-6 d-flex gap-1  ">
                                                    <input type="file" />
                                                    <img  width={"150px"} src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?t=st=1739962202~exp=1739965802~hmac=60b9d7236ff78cb0b9597974c83f55713a1f5d674ce16effd74f24b9a6102871&w=826" alt="" />
                                                </div>
                                            </div>

                                            <div className='my-5 col-10  text-center'>
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

export default Profile