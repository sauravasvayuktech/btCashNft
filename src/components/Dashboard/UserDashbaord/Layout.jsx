import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from "../../../assets/Images/logo.webp";
import ticketimg from "../../../assets/Images/ticketimg.jpg";
import SideBar from './SideBar';
import BoxImg from '../../Home/BoxImg';
import boxImg from "../../../assets/Images/boxImg.jpg";
import { Link, Outlet } from 'react-router';
import Rewards from './Rewards';
import FooterBottom from '../../Footer/FooterBottom';
import UserDashboard from './UserDashboard';
import MobileFooter from '../../Footer/MobileFooter';

const elem = {
    boxImg: boxImg,
    value: "5000",
    title: "Worldwide Webb Land",
    auth: "BTCASH",
    price: "1000",
}

const Layout = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <SideBar />

                    <section className="dashboard px-0">
                        <div className="coverImage" style={{ backgroundImage: `url(https://img.freepik.com/premium-photo/abstract-digital-wave-pattern-with-vibrant-colors-dots_1176110-5032.jpg?w=1380)` }}>

                        </div>
                        <Outlet />
                        {/* <UserDashboard /> */}
                    </section>
                    <MobileFooter />
                    <FooterBottom />
                </Row>
            </Container>
        </>
    )
}

export default Layout