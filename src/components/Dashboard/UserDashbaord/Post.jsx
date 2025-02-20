import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { BiRepost } from 'react-icons/bi'
import { FaHeart, FaRegEye } from 'react-icons/fa'
import { IoIosMore } from 'react-icons/io'
import { LiaCommentDots } from 'react-icons/lia'
import { MdEmojiEmotions, MdVerified } from 'react-icons/md'
import { RiEmojiStickerLine } from 'react-icons/ri'
import { Link } from 'react-router'

const Post = () => {
    return (
        <>
            <div className="postSection border-b pt-3">
                <Row>
                    <Col sm={1}>

                        <img width={"75px"} className='rounded-circle' src='https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?t=st=1739962202~exp=1739965802~hmac=60b9d7236ff78cb0b9597974c83f55713a1f5d674ce16effd74f24b9a6102871&w=826' />

                    </Col>
                    <Col sm={8}>
                        <div className="postTopBar d-flex align-items-center justify-content-between mb-4">
                            <div className="postTopBarLeft d-flex gap-3 align-items-center">
                                <div className="userName fw-bold">
                                    Da Investopedia <MdVerified className='text-primary fs-5' />
                                </div>
                                <div className="postTime text-lead  ">
                                    2 hours
                                </div>
                            </div>


                        </div>
                        <div className="postContent">
                            $BTC is consolidating within a defined range, holding above key support. Sustaining this level increases bullish potential, while a breakdown could lead to further downside.
                            <div className='d-flex flex-wrap gap-2 text-primary my-1'>
                                <Link>
                                    #Bitcoin
                                </Link>
                                <Link>

                                    #BTC Price Analysis
                                </Link>

                            </div>

                            <div className="contentImg">
                                <img className='rounded-4' src="https://img.freepik.com/premium-photo/graph-with-word-graph-it-that-saysgraphon-it_804007-89041.jpg?w=826" width={"95%"} height={"400px"} alt="" style={{ objectFit: "cover" }} />
                            </div>
                            <div className="postdatentime fs14 my-2">
                                February 19, 2025 at 4:33 PM
                            </div>
                            <div className="emotescount d-flex gap-3">
                                <span className='rounded-pill border d-inline-block px-3 py-1 my-2'>
                                    <FaHeart className='text-danger fs-5' /> 68
                                </span>
                                <span className='rounded-pill border d-inline-block px-3 py-1 my-2'>
                                    <MdEmojiEmotions className='fs-5 text-warning' /> 5
                                </span>
                            </div>

                            <div className="interactions d-flex align-items-center justify-content-between pe-3">
                                <span className=' d-inline-block px-3 py-1 my-2'>
                                    <FaRegEye className=' fs-4' /> 158k
                                </span>
                                <span className=' d-inline-block px-3 py-1 my-2'>
                                    <LiaCommentDots className='fs-4 ' /> 5
                                </span>
                                <span className=' d-inline-block px-3 py-1 my-2'>
                                    <BiRepost className='fs-4 ' /> 5
                                </span>
                                <span className=' d-inline-block px-3 py-1 my-2'>
                                    <RiEmojiStickerLine className='fs-4 ' /> 5
                                </span>
                                <span className=' d-inline-block px-3 py-1 my-2'>
                                    <IoIosMore className='fs-4 ' />
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col sm={3} className='text-end'>
                        <div className="postTopBarRight">
                            <button className='btn-filled'>
                                + Follow
                            </button>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Post