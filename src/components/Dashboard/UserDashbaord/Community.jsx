import React, { useState } from 'react'
import { Col, Container, FloatingLabel, FormControl, Row } from 'react-bootstrap'
import SideBar from './SideBar'
import { Form, Link } from 'react-router'
import { FaHeart, FaImages, FaRegEye } from 'react-icons/fa'
import { MdEmojiEmotions, MdGifBox, MdVerified } from 'react-icons/md'
import { LiaCommentDots } from 'react-icons/lia'
import { BiRepost } from 'react-icons/bi'
import { RiEmojiStickerLine } from 'react-icons/ri'
import { IoIosMore } from 'react-icons/io'
import Post from './Post'
import BoxImg from '../../Home/BoxImg';
import boxImg from "../../../assets/Images/boxImg.jpg";
import FooterBottom from '../../Footer/FooterBottom'
import EmojiPicker from 'emoji-picker-react'
import MobileFooter from '../../Footer/MobileFooter'

const Community = () => {

    const elem = {
        boxImg: boxImg,
        value: "5000",
        title: "Worldwide Webb Land",
        auth: "BTCASH",
        price: "1000",
    }

       const [text, setText] = useState("");  // Store input value
        const [showPicker, setShowPicker] = useState(false); // Show/hide emoji picker
      
        const handleEmojiClick = (emojiData) => {
          setText((prev) => prev + emojiData.emoji); // Append emoji to input
          setShowPicker(false); // Close dropdown after selecting an emoji
        };

    return (
        <>
            <Container fluid className='communitySection'>
                <Row>
                    <SideBar />

                    <section className="dashboard px-0">
                        <div className="coverImage" style={{ backgroundImage: `url(https://img.freepik.com/premium-photo/abstract-digital-wave-pattern-with-vibrant-colors-dots_1176110-5032.jpg?w=1380)` }}>

                        </div>
                        <div className="container-fluid px-3 px-lg-4 px-md-4 px-2">
                            <div className="row  dashboard_item">
                                <div className="col-lg-9  liftedup_stack">
                                    <div className='themeCard mb-4 communityPostSection'>
                                        <div className="postingSection border-b pb-3 mb-5">
                                            <Row>
                                                <Col sm={1} className='mb-md-0 mb-2'>
                                                    <img className='userimage rounded-circle' src='https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?t=st=1739962202~exp=1739965802~hmac=60b9d7236ff78cb0b9597974c83f55713a1f5d674ce16effd74f24b9a6102871&w=826' />
                                                </Col>
                                                <Col md={11} sm={10} className='ms-auto'>
                                                    <textarea placeholder='How do you feel about markets today ? share your ideas here !' className='form-control' value={text}
                                                        onChange={(e) => setText(e.target.value)} >

                                                    </textarea>

                                                    <div className='d-flex justify-content-between mt-4'>
                                                        <div className="emotes">
                                                            <ul className="list-unstyled d-flex align-items-center gap-3">
                                                                <li className='position-relative'>
                                                                    <FaImages className='fs-5 post-cta'  />
                                                                    <input type="file" className='post-cta uploadimg-cta position-absolute start-0 w-100 opacity-0' />
                                                                </li>
                                                                <li>
                                                                    <MdGifBox className='fs-5 post-cta' />
                                                                </li>
                                                                <li className='position-relative'>
                                                                    <MdEmojiEmotions onClick={() => setShowPicker((prev) => !prev)} className='fs-5 post-cta' />
                                                                    {/* Dropdown Emoji Picker */}
                                                                    {showPicker && (
                                                                        <div style={{ position: "absolute", top: "40px", left: "0px", zIndex: "1000" }}>
                                                                            <EmojiPicker onEmojiClick={handleEmojiClick} />
                                                                        </div>
                                                                    )}
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
                                        <div className="searchsection border-b mb-3 pb-5">
                                            <form className="d-flex flex-md-row flex-column gap-md-0 gap-3" role="search">
                                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                                <button className="btn-hollow" type="submit">Search</button>
                                            </form>
                                        </div>

                                        <Post />
                                        <Post />
                                        <Post />
                                        <Post />
                                        <Post />
                                        <Post />
                                        <Post />
                                        <Post />


                                    </div>

                                </div>
                                <div className='col-lg-3 liftedup_stack-md d-lg-block d-none'>
                                    <div className='themeCard mb-4'>

                                        <h2>Advertisement Section </h2>

                                        <div className='d-flex flex-column align-items-center justify-content-center  mx-auto mb-4'>
                                            <h6 className='text-start me-auto mb-4'>Monthly Contest</h6>
                                            <BoxImg data={elem} />
                                        </div>
                                        <div className='d-flex flex-column align-items-center justify-content-center  mx-auto mb-4'>
                                            <h6 className='text-start me-auto mb-4'>Weekly Contest</h6>
                                            <BoxImg data={elem} />
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </section>
                    <MobileFooter/>
                    <FooterBottom />
                </Row>
            </Container>
        </>
    )
}

export default Community