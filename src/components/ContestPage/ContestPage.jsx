import BoxImg from "../Home/BoxImg";
import boxImg from "../../assets/Images/boxImg.jpg";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import shortImg from "../../assets/Images/shortImg.webp";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Hero from "../Home/Hero";
import { Link } from "react-router";

const ContestPage = () => {
  const banner = [
    {
      heroSection: "hero-section contestBanner",
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
      urlImg: "/singlepage",
      boxImg: boxImg,
      value: "5000",
      title: "Worldwide Webb Land",
      auth: "BTCASH",
      price: "1000",
    },
    {
      urlImg: "/singlepage",
      boxImg: boxImg,
      value: "5000",
      title: "Worldwide Webb Land",
      auth: "BTCASH",
      price: "1000",
    },
    {
      urlImg: "/singlepage",
      boxImg: boxImg,
      value: "5000",
      title: "Worldwide Webb Land",
      auth: "BTCASH",
      price: "1000",
    },
    {
      urlImg: "/singlepage",
      boxImg: boxImg,
      value: "5000",
      title: "Worldwide Webb Land",
      auth: "BTCASH",
      price: "1000",
    },
    {
      urlImg: "/singlepage",
      boxImg: boxImg,
      value: "5000",
      title: "Worldwide Webb Land",
      auth: "BTCASH",
      price: "1000",
    },
    {
      urlImg: "/singlepage",
      boxImg: boxImg,
      value: "5000",
      title: "Worldwide Webb Land",
      auth: "BTCASH",
      price: "1000",
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

        <section className="contest-wrapper py-3 py-lg-5 py-md-4">
          <div className="contest-wrapperAll px-3 pb-3">
            <p>
              Discover how artificial intelligence can amplify the
              artistic... <Link to="/singlepage">see more</Link>
            </p>
            <div className="textInfoContest d-flex align-items-center gap-4">
              <div>
                <span>Volume 5000 </span>
              </div>
              <div>
                <span>Created Jan 2023</span>
              </div>
            </div>
          </div>
          <Container fluid>
            <Swiper
              className="swiperTopPadding"
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
                1600: {
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
      </main>
    </>
  );
};

export default ContestPage;
