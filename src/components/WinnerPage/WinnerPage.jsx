import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Hero from "../Home/Hero";
import WinnerList from "../Home/WinnerList";
import shortImg from "../../assets/Images/shortImg.webp";
import bannerImg from "../../assets/Images/banner.jpg";

const WinnerPage = () => {
  const banner = [
    {
      heroSection: "hero-section contestBanner",
      imgAlt: "heroSection",
      title: "Winner List",
      author: "By BTCASH",
    //   valueNum: "8,888 items - 0.269999 ETH",
      urlView: "/",
      shortImg: shortImg,
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
  return (
    <>
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

        <section className="winners-list-wrapper mb-3 mb-lg-5 mb-md-4 pt-4">
        <Container fluid>
          <div className="winner-list-title mb-4">
            <h3>Hall of Champions: Winners List</h3>
          </div>
          <Row>
            {winnerData.map((elem, index) => (
              <>
                <Col lg={4} md={12} sm={12} key={index}>
                  <WinnerList winnerData={elem} />
                </Col>
              </>
            ))}
          </Row>
        </Container>
      </section>
      </main>
    </>
  );
};

export default WinnerPage;
