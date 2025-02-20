import React from 'react'
import { Col, Dropdown, Row } from 'react-bootstrap'
import { BiRepost } from 'react-icons/bi'
import { FaHeart, FaRegEye } from 'react-icons/fa'
import { IoIosMore, IoMdCopy } from 'react-icons/io'
import { LiaCommentDots } from 'react-icons/lia'
import { MdAdd, MdBlockFlipped, MdEmojiEmotions, MdVerified } from 'react-icons/md'
import { RiEmojiStickerLine } from 'react-icons/ri'
import { Link } from 'react-router'
import PostTopBar from './PostTopBar'
import { CiFlag1, CiShare2 } from 'react-icons/ci'
import { FaArrowTrendUp } from 'react-icons/fa6'
import { BsEmojiFrown, BsEmojiFrownFill } from 'react-icons/bs'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import EmojiPicker from 'emoji-picker-react'


const Post = () => {
    const [open, setOpen] = useState(false);

    const [text, setText] = useState("");  // Store input value
    const [showPicker, setShowPicker] = useState(false); // Show/hide emoji picker
  
    const handleEmojiClick = (emojiData) => {
      setText((prev) => prev + emojiData.emoji); // Append emoji to input
      setShowPicker(false); // Close dropdown after selecting an emoji
    };

    return (
        <>
            <div className="postSection border-b py-3">
                <Row>
                    <Col md={1} xs={12} className='order-md-1 order-2 d-md-block d-flex gap-3 align-items-center mb-md-0 mb-3' >

                        <img width={"75px"} className='postuserimg rounded-circle' src='https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?t=st=1739962202~exp=1739965802~hmac=60b9d7236ff78cb0b9597974c83f55713a1f5d674ce16effd74f24b9a6102871&w=826' />
                        <div className='d-md-none d-block w-100'>
                            <PostTopBar />
                            <button className='btn-filled'>
                                + Follow
                            </button>
                        </div>
                    </Col>
                    <Col md={8} xs={12} className='order-md-2 order-3'>
                        <div className='d-md-block d-none'>

                            <PostTopBar />
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
                                    <FaRegEye className=' fs-4 interaction' /> 158k
                                </span>
                                <span className=' d-inline-block px-3 py-1 my-2'>
                                    <LiaCommentDots onClick={() => setOpen(!open)} className='fs-4 interaction ' /> 5
                                </span>
                                <span className=' d-inline-block px-3 py-1 my-2'>
                                    <BiRepost className='fs-4 interaction ' /> 5
                                </span>
                                <span className=' d-inline-block px-3 py-1 my-2 position-relative'>
                                    <RiEmojiStickerLine onClick={() => setShowPicker((prev) => !prev)} className='fs-4 interaction ' /> 5
                                        {/* Dropdown Emoji Picker */}
                                {showPicker && (
                                    <div style={{ position: "absolute", top: "40px", left: "0px", zIndex: "1000" }}>
                                        <EmojiPicker onEmojiClick={handleEmojiClick} />
                                    </div>
                                )}
                                </span>
                                <span className=' d-inline-block px-3 py-1 my-2'>
                                    <div class="dropdown">

                                        <IoIosMore data-bs-toggle="dropdown" className='fs-4 dropdown-toggle ' />
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item py-2" href="#"><MdAdd /> Follow</a></li>
                                            <li><a class="dropdown-item py-2" href="#"><CiShare2 /> Share to twitter</a></li>
                                            <li><a class="dropdown-item py-2" href="#"><IoMdCopy /> Copy link</a></li>
                                            <li><a class="dropdown-item py-2" href="#"><FaArrowTrendUp /> Promote this post</a></li>
                                            <li><a class="dropdown-item py-2" href="#"><BsEmojiFrown /> I'm not interested in this post</a></li>
                                            <li><a class="dropdown-item py-2" href="#"><CiFlag1 /> Report post</a></li>
                                            <li><a class="dropdown-item py-2" href="#"><MdBlockFlipped /> Block</a></li>
                                        </ul>
                                    </div>

                                </span>
                            </div>

                            <Collapse in={open}>
                                <div className="commentsection">
                                    <h6>Reply to this post</h6>
                                    <textarea name="commentsection" id="" className='form-control mb-2'></textarea>
                                    <button className="btn-filled">Post</button>
                                </div>
                            </Collapse>


                        </div>
                    </Col>
                    <Col md={3} sm={12} className='text-end order-md-3 order-1 d-md-block d-none'>
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