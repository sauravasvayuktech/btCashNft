import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from "../../../assets/Images/logo.webp";
import ticketimg from "../../../assets/Images/ticketimg.jpg";
import SideBar from './SideBar';
import BoxImg from '../../Home/BoxImg';
import boxImg from "../../../assets/Images/boxImg.jpg";
import { Link } from 'react-router';


const Rewards = () => {

    const elem = {
        boxImg: boxImg,
        value: "5000",
        title: "Worldwide Webb Land",
        auth: "BTCASH",
        price: "1000",
    }
  return (
    <>
    <div className='themeCard h-100'>
                                        <div className='cardHeading d-flex align-items-center justify-content-between mb-4 '>
                                            <h3>Rewards</h3>
                                        </div>
                                        
                                        <div className='text-center mb-4'>

                                            <img src={logo} width={"80px"} className='mx-auto mb-4' />

                                            <div className='rewardAmount fs-4  mx-auto'>
                                                <p className='fs14 mb-1'>Reward Amount</p>
                                                $ 8000
                                            </div>
                                        </div>
                                        

                                        <div className="rewardPrevDetails  mx-auto mb-4">
                                            <h6 className='mb-3'>Previous Rewards</h6>
                                            <ul className="list-unstyled">
                                                <li className="d-flex align-items-center mb-3 w-100 justify-content-between">
                                                    <div className="amt textgreen fs14">
                                                        $ 100
                                                    </div>
                                                    <div className="date text_slate">
                                                        19-2-2025
                                                    </div>
                                                </li>
                                                <li className="d-flex align-items-center mb-3 w-100 justify-content-between">
                                                    <div className="amt textgreen fs14">
                                                        $ 100
                                                    </div>
                                                    <div className="date text_slate">
                                                        19-2-2025
                                                    </div>
                                                </li>
                                                <li className="d-flex align-items-center mb-3 w-100 justify-content-between">
                                                    <div className="amt textgreen fs14">
                                                        $ 100
                                                    </div>
                                                    <div className="date text_slate">
                                                        19-2-2025
                                                    </div>
                                                </li>
                                                <li className="d-flex align-items-center mb-3 w-100 justify-content-between">
                                                    <div className="amt textgreen fs14">
                                                        $ 100
                                                    </div>
                                                    <div className="date text_slate">
                                                        19-2-2025
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className='d-flex flex-column align-items-center justify-content-center  mx-auto mb-4'>
                                            <h6 className='text-start me-auto mb-4'>Monthly Contest</h6>
                                            <BoxImg data={elem} />
                                        </div>
                                        <div className='d-flex flex-column align-items-center justify-content-center  mx-auto mb-4'>
                                            <h6 className='text-start me-auto mb-4'>Weekly Contest</h6>
                                            <BoxImg data={elem} />
                                        </div>


                                    </div>
    </>
  )
}

export default Rewards