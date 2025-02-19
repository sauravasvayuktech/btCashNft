import BoxImg from "../Home/BoxImg";
import boxImg from "../../assets/Images/boxImg.jpg";
import { Col, Container, Row } from "react-bootstrap";

const ContestPage = () => {
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

  return (
    <>
      <main>
        <section className="contest-wrapper py-3 py-lg-5 py-md-4">
          <Container fluid>
            <Row>
              {data.map((items, index) => (
                <>
                  <Col lg={2} className="mb-3">
                    <BoxImg data={items} />
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

export default ContestPage;
