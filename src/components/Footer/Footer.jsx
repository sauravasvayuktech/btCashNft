import { Container } from "react-bootstrap";
import { Link } from "react-router";

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
      <div className="footer-bottom py-4" style={{background: '#2a2a2a'}}>
        <p className="mb-0 text-center">
          Copyright 2025{" "}
          <span style={{color: "#E9A031"}}>
            <Link to="/">Btcash NFT</Link>
          </span>{" "}
          All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
