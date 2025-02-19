import React from 'react'
import { Col, Container, FloatingLabel, FormControl, Row } from 'react-bootstrap'
import SideBar from './SideBar'
import { Form, Link } from 'react-router'
import { FaImages } from 'react-icons/fa'
import { MdEmojiEmotions, MdGifBox, MdVerified } from 'react-icons/md'

const Community = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <SideBar />

                    <section className="dashboard px-0">
                        <div className="coverImage" style={{ backgroundImage: `url(https://img.freepik.com/premium-photo/abstract-digital-wave-pattern-with-vibrant-colors-dots_1176110-5032.jpg?w=1380)` }}>

                        </div>
                        <div className="container-fluid px-3 px-lg-4 px-md-4 px-2">
                            <div className="row flex-lg-row flex-column-reverse dashboard_item">
                                <div className="col-lg-9  liftedup_stack">
                                    <div className='themeCard mb-4'>
                                        <div className="postingSection border-light-subtle border-bottom pb-3 mb-3">
                                            <Row>
                                                <Col sm={1}>
                                                    <img width={"75px"} className='rounded-circle' src='https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?t=st=1739962202~exp=1739965802~hmac=60b9d7236ff78cb0b9597974c83f55713a1f5d674ce16effd74f24b9a6102871&w=826' />
                                                </Col>
                                                <Col sm={11}>
                                                    <textarea placeholder='How do you feel about markets today ? share your ideas here !' rows={"4"} cols={"120"} className='form-control'  >

                                                    </textarea>
                                                    <div className='d-flex justify-content-between mt-4'>
                                                        <div className="emotes">
                                                            <ul className="list-unstyled d-flex align-items-center gap-3">
                                                                <li>
                                                                    <FaImages className='fs-5 post-cta' />
                                                                </li>
                                                                <li>
                                                                    <MdGifBox className='fs-5 post-cta' />
                                                                </li>
                                                                <li>
                                                                    <MdEmojiEmotions className='fs-5 post-cta' />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="postbtn">
                                                            <button className="btn-filled">
                                                                Post
                                                            </button>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className="searchsection mb-3">
                                            <form class="d-flex" role="search">
                                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                                <button class="btn-hollow" type="submit">Search</button>
                                            </form>
                                        </div>

                                        <div className="postSection  pt-3">
                                            <Row>
                                                <Col sm={1}>
                                                    <Col sm={1}>
                                                        <img width={"75px"} className='rounded-circle' src='https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?t=st=1739962202~exp=1739965802~hmac=60b9d7236ff78cb0b9597974c83f55713a1f5d674ce16effd74f24b9a6102871&w=826' />
                                                    </Col>
                                                </Col>
                                                <Col sm={11}>
                                                    <div className="postTopBar d-flex align-items-center justify-content-between">
                                                        <div className="postTopBarLeft d-flex gap-3 align-items-center">
                                                        <div className="userName fw-bold">
                                                        Da Investopedia <MdVerified className='text-primary fs-5' />
                                                        </div>
<div className="postTime text-lead  ">
    2 hours
</div>
                                                        </div>
                                                        <div className="postTopBarRight">
                                                            <button className='btn-filled'>
                                                                + Follow    
                                                            </button>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>

                                    </div>

                                </div>
                                <div className='col-lg-3 liftedup_stack'>
                                    <div className='themeCard mb-4'>

                                        <h2>Advertisement Section </h2>
                                    </div>
                                </div>



                            </div>
                        </div>
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

export default Community