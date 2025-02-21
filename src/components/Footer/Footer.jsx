import { Col, Container, Row } from "react-bootstrap";
import { GrHomeRounded } from "react-icons/gr";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { Link } from "react-router";
import FooterBottom from "./FooterBottom";
import MobileFooter from "./MobileFooter";

const Footer = () => {
  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <footer>
        <main>
          <Container fluid>
            <div className="getInTouch-wrapper">
              <h2 className="pb-1">Get in touch with our friendly support</h2>
              <p className="mb-0">
                Got a question about BTCASH NFT? Get in touch with our friendly
                staff.
              </p>
              <div className="pt-5">
                <form onClick={handleForm} className="supportForm">
                  <input type="email" placeholder="Enter Your Email ID" />
                  <button className="authText submitBtn py-3 px-5 border-0">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </Container>
        </main>
      </footer>
      <FooterBottom/>

      {/* mobile footer */}
      <MobileFooter/>
    </>
  );
};

export default Footer;
