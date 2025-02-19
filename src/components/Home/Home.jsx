import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Hero from "./Hero";
import shortImg from "../../assets/Images/shortImg.webp";
import boxImg from "../../assets/Images/boxImg.jpg";
import { Link } from "react-router";
import BoxImg from "./BoxImg";
import bannerImg from "../../assets/Images/banner.jpg";
import WinnerList from "./WinnerList";
import { PiSelectionAllFill } from "react-icons/pi";
import PlayCard from "./PlayCard";
import FeaturesCard from "./FeaturesCard";

const Home = () => {
  const banner = [
    {
      heroSection: "hero-section",
      imgAlt: "heroSection",
      title: "My Pet Hooligan",
      author: "By AMGI",
      valueNum: "8,888 items - 0.269999 ETH",
      urlView: "/",
      shortImg: shortImg,
    },
    {
      heroSection: "hero-section",
      imgAlt: "heroSection",
      title: "My Pet Hooligan",
      author: "By AMGI",
      valueNum: "8,888 items - 0.269999 ETH",
      urlView: "/",
      shortImg: shortImg,
    },
  ];

  const data = [
    {
      boxImg: boxImg,
      value: "5000",
      title: "Worldwide Webb Land",
      auth: "BTCASH",
      price: "1000",
    },
    {
      boxImg: boxImg,
      value: "5000",
      title: "Worldwide Webb Land",
      auth: "BTCASH",
      price: "1000",
    },
    {
      boxImg: boxImg,
      value: "5000",
      title: "Worldwide Webb Land",
      auth: "BTCASH",
      price: "1000",
    },
    {
      boxImg: boxImg,
      value: "5000",
      title: "Worldwide Webb Land",
      auth: "BTCASH",
      price: "1000",
    },
    {
      boxImg: boxImg,
      value: "5000",
      title: "Worldwide Webb Land",
      auth: "BTCASH",
      price: "1000",
    },
    {
      boxImg: boxImg,
      value: "5000",
      title: "Worldwide Webb Land",
      auth: "BTCASH",
      price: "1000",
    },
  ];

  const winnerData = [
    {
      winnerEmail: "rahu***@gmail.com",
      winnerImg: shortImg,
      winnerNumber: 5421,
      modalBanner: bannerImg,
      priceWinner: 5421,
      contestDetails: "rahiu=f s kasdjflka",
      usdtNum: 23454,
      winningNum: 985748,
      winnerName: "MemnexOS",
    },
    {
      winnerEmail: "rahu***@gmail.com",
      winnerImg: shortImg,
      winnerNumber: 5421,
      modalBanner: bannerImg,
      priceWinner: 5421,
      contestDetails: "rahiu=f s kasdjflka",
      usdtNum: 23454,
      winningNum: 985748,
      winnerName: "MemnexOS",
    },
    {
      winnerEmail: "rahu***@gmail.com",
      winnerImg: shortImg,
      winnerNumber: 5421,
      modalBanner: bannerImg,
      priceWinner: 5421,
      contestDetails: "rahiu=f s kasdjflka",
      usdtNum: 23454,
      winningNum: 985748,
      winnerName: "MemnexOS",
    },
  ];

  const playData = [
    {
      playicon: <PiSelectionAllFill />,
      playnum: "01.",
      playtitle: "Make a selection",
      playdec:
        "To participate in NFT bidding, first, register for BT and get access to all available contests. Once you're registered, browse through the exciting range of contests we have to offer. Finally, choose the contest that catches your interest and get ready to bid!",
    },
    {
      playicon: <PiSelectionAllFill />,
      playnum: "01.",
      playtitle: "Make a selection",
      playdec:
        "To participate in NFT bidding, first, register for BT and get access to all available contests. Once you're registered, browse through the exciting range of contests we have to offer. Finally, choose the contest that catches your interest and get ready to bid!",
    },
    {
      playicon: <PiSelectionAllFill />,
      playnum: "01.",
      playtitle: "Make a selection",
      playdec:
        "To participate in NFT bidding, first, register for BT and get access to all available contests. Once you're registered, browse through the exciting range of contests we have to offer. Finally, choose the contest that catches your interest and get ready to bid!",
    },
  ];

  const featuresCards = [
    {
      featureImg: bannerImg,
      title: "Real-Time",
      para: "Real-Time Bidding allows users to place bids on items in real-time and also provides an engaging and competitive experience for players",
    },
    {
      featureImg: bannerImg,
      title: "Proxy",
      para: "Proxy Bidding allows helps users avoid overspending while still staying competitive in the auction.",
    },
    {
      featureImg: bannerImg,
      title: "Automated",
      para: "Automated Bidding is designed for convenience, allowing users to participate in auctions without constantly monitoring the process.",
    },
    {
      featureImg: bannerImg,
      title: "Tracking",
      para: "Bid Tracking and Notifications provide users with real-time updates on the status of their bids.",
    },
  ];

  return (
    <main>
      <section className="banner-wrapper">
        <Container fluid>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="hero-wrapper"
          >
            {banner.map((elem, index) => (
              <SwiperSlide key={index}>
                <Hero banner={elem} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </section>

      <section className="liveBid-wrapper">
        <Container fluid>
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h3>Live Bid</h3>
            <div>
              <Link to="">
                <span>View All</span>
              </Link>
            </div>
          </div>
          <Swiper
            spaceBetween={20}
            slidesPerView={6}
            breakpoints={{
              100: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              320: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 8,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              976: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 18,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
            }}
          >
            {data.map((elem, index) => (
              <>
                <SwiperSlide key={index}>
                  <BoxImg data={elem} />
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </Container>
      </section>

      <section className="liveBid-wrapper pt-0">
        <Container fluid>
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h3>Upcoming Bid</h3>
            <div>
              <Link to="">
                <span>View All</span>
              </Link>
            </div>
          </div>
          <Swiper
            spaceBetween={20}
            slidesPerView={6}
            breakpoints={{
              100: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              320: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 8,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              976: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 18,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
            }}
          >
            {data.map((elem, index) => (
              <>
                <SwiperSlide key={index}>
                  <BoxImg data={elem} />
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </Container>
      </section>

      <section className="liveBid-wrapper pt-0">
        <Container fluid>
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h3>Completed Bid</h3>
            <div>
              <Link to="">
                <span>View All</span>
              </Link>
            </div>
          </div>
          <Swiper
            spaceBetween={20}
            slidesPerView={6}
            breakpoints={{
              100: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              320: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 8,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              976: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 18,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
            }}
          >
            {data.map((elem, index) => (
              <>
                <SwiperSlide key={index}>
                  <BoxImg data={elem} />
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </Container>
      </section>

      <section className="winners-list-wrapper mb-5">
        <Container fluid>
          <div className="winner-list-title mb-4">
            <h3>Hall of Champions: Winners List</h3>
          </div>
          <Row>
            {winnerData.map((elem, index) => (
              <>
                <Col lg={4} key={index}>
                  <WinnerList winnerData={elem} />
                </Col>
              </>
            ))}
          </Row>
        </Container>
      </section>

      <section className="winners-list-wrapper mb-5">
        <Container fluid>
          <div className="winner-list-title mb-4">
            <h3>Completed Bid</h3>
          </div>
          <Row>
            {winnerData.map((elem, index) => (
              <>
                <Col lg={4} key={index}>
                  <WinnerList winnerData={elem} />
                </Col>
              </>
            ))}
          </Row>
        </Container>
      </section>

      <section className="howPlay-wrapper mb-5">
        <Container fluid>
          <div className="howPlay-title mb-4">
            <h3>How to Play</h3>
          </div>
          <Row>
            {playData.map((data, index) => (
              <>
                <Col lg={4} key={index}>
                  <PlayCard playData={data} />
                </Col>
              </>
            ))}
          </Row>
        </Container>
      </section>

      <section className="features-wrapper mb-5">
        <Container fluid>
          <div className="howPlay-title mb-4">
            <h3>Our Features</h3>
          </div>
          <Row>
            {featuresCards.map((data, index) => (
              <>
                <Col lg={3} key={index}>
                  <FeaturesCard featuresCards={data} />
                </Col>
              </>
            ))}
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Home;
