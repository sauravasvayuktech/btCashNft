import { Accordion, Col, Container, Row, Table } from "react-bootstrap";
import solana from "../../assets/Images/solana.jpg";
import { MdOutlineWatchLater } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { LuTextQuote } from "react-icons/lu";
import { GiPodiumWinner } from "react-icons/gi";
import { useState } from "react";

const SinglePage = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);

  // Decrement function ensuring count doesn't go below 0
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // Handle input change and prevent NaN
  const handleChange = (e) => {
    const value = e.target.value;
    const parsedValue = parseInt(value);

    // If the value is NaN or not a number, reset to 0 or keep previous valid value
    if (isNaN(parsedValue) || value === "") {
      setCount(0);
    } else {
      setCount(parsedValue);
    }
  };

  // Handle keydown for up and down arrow keys
  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      increment();
    } else if (e.key === "ArrowDown") {
      decrement();
    }
  };

  return (
    <>
      <main>
        <section className="singlePage-wrapper py-3 py-lg-5 py-md-4">
          <Container fluid>
            <Row>
              <Col lg={6}>
                <div className="singleBanner">
                  <img src={solana} alt="" className="img-fluid rounded-4" />
                </div>
              </Col>
              <Col lg={6}>
                <div className="singlePage-content pt-2">
                  <div className="top-content-wrapper">
                    <div className="userName-top d-flex gap-1 align-items-center">
                      <h6 className="mb-0">Azuki Elementals</h6>
                      <span>
                        <svg
                          aria-label="verified-icon"
                          className="sc-9c65691d-0 hDXJCP"
                          fill="#2081E2"
                          viewBox="0 0 30 30"
                          width="20"
                          height="20"
                        >
                          <path
                            d="M13.474 2.80108C14.2729 1.85822 15.7271 1.85822 16.526 2.80108L17.4886 3.9373C17.9785 4.51548 18.753 4.76715 19.4892 4.58733L20.9358 4.23394C22.1363 3.94069 23.3128 4.79547 23.4049 6.0278L23.5158 7.51286C23.5723 8.26854 24.051 8.92742 24.7522 9.21463L26.1303 9.77906C27.2739 10.2474 27.7233 11.6305 27.0734 12.6816L26.2903 13.9482C25.8918 14.5928 25.8918 15.4072 26.2903 16.0518L27.0734 17.3184C27.7233 18.3695 27.2739 19.7526 26.1303 20.2209L24.7522 20.7854C24.051 21.0726 23.5723 21.7315 23.5158 22.4871L23.4049 23.9722C23.3128 25.2045 22.1363 26.0593 20.9358 25.7661L19.4892 25.4127C18.753 25.2328 17.9785 25.4845 17.4886 26.0627L16.526 27.1989C15.7271 28.1418 14.2729 28.1418 13.474 27.1989L12.5114 26.0627C12.0215 25.4845 11.247 25.2328 10.5108 25.4127L9.06418 25.7661C7.86371 26.0593 6.6872 25.2045 6.59513 23.9722L6.48419 22.4871C6.42773 21.7315 5.94903 21.0726 5.24777 20.7854L3.86969 20.2209C2.72612 19.7526 2.27673 18.3695 2.9266 17.3184L3.70973 16.0518C4.10824 15.4072 4.10824 14.5928 3.70973 13.9482L2.9266 12.6816C2.27673 11.6305 2.72612 10.2474 3.86969 9.77906L5.24777 9.21463C5.94903 8.92742 6.42773 8.26854 6.48419 7.51286L6.59513 6.0278C6.6872 4.79547 7.86371 3.94069 9.06418 4.23394L10.5108 4.58733C11.247 4.76715 12.0215 4.51548 12.5114 3.9373L13.474 2.80108Z"
                            className="sc-9c65691d-1 Sxbrk"
                          ></path>
                          <path
                            d="M13.5 17.625L10.875 15L10 15.875L13.5 19.375L21 11.875L20.125 11L13.5 17.625Z"
                            fill="white"
                            stroke="white"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <h2 className="py-3">
                      BNB Battle: Play, Compete, Win! #67a6fc4858a8449fddd83b22
                    </h2>
                    <div className="status-wrapper">
                      <p className="mb-0 bg-success d-inline px-3 py-2 rounded mb-4">
                        Completed
                      </p>
                      <div className="counterWrapper">
                        <p>Number of tickets you wanna buy</p>
                        <div className="d-flex align-items-center gap-3">
                          <button
                            onClick={increment}
                            className="authText bidBtn border-0"
                          >
                            +
                          </button>
                          <input
                            className="bidBtnCenter"
                            type="text"
                            value={count}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                          />
                          <button
                            onClick={decrement}
                            className="authText bidBtn border-0"
                          >
                            -
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="my-4 saleContent">
                      <div className="saleText d-flex align-items-center gap-2">
                        <div>
                          <MdOutlineWatchLater />
                        </div>
                        <div>
                          <p className="mb-0">
                            Sale ends March 20, 2025 at 2:20 PM
                          </p>
                        </div>
                      </div>
                      <div className="ticketContent">
                        <div className="ticketContent-one">
                          <span>Ticket price</span>
                          <h5 className="mb-0">1000 BTMETA</h5>
                        </div>
                        <div className="ticketContent-two">
                          <button className="">Bid Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bottom-content-wrapper">
                    <div className="saleMain-content">
                      <Accordion defaultActiveKey="1" flush>
                        <Accordion.Item eventKey="1" className="custom-AccItem">
                          <Accordion.Header className="custom-Accheader">
                            <div className="d-flex align-items-center gap-2">
                              <div className="saleIcons">
                                <LuTextQuote />
                              </div>
                              <div>Description</div>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body className="custom-Accbody">
                            <div>
                              <p>
                                Step into the arena and fight for your share
                                ofBNB rewards! 💰🏆
                              </p>
                              <p className="d-flex justify-content-between">
                                <span>1st Prize:</span>
                                <span> 500x BNB</span>
                              </p>
                              <p className="d-flex justify-content-between">
                                <span>2nd Prize:</span>
                                <span> 200x BNB </span>
                              </p>
                              <p className="d-flex justify-content-between">
                                <span>3rd Prize:</span>
                                <span> 100x BNB </span>
                              </p>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2" className="custom-AccItem">
                          <Accordion.Header className="custom-Accheader">
                            <div className="d-flex align-items-center gap-2">
                              <div className="saleIcons">
                                <GiPodiumWinner />
                              </div>
                              <div>Winner Details</div>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body className="custom-Accbody">
                            <div>
                              <div
                                style={{
                                  borderBottom:
                                    "1px solid rgba(255, 255, 255, 0.12)",
                                }}
                              >
                                <p className="d-flex justify-content-between">
                                  <span>1st Ranker</span>
                                  <span>Shaiju</span>
                                </p>
                                <p className="d-flex justify-content-between">
                                  <span>Winning Ticket</span>
                                  <span>105998</span>
                                </p>
                              </div>
                              <div className="winner-table pt-4">
                                <div className="text-center mb-4">
                                  <h5>Top 3 Rankers</h5>
                                </div>
                                <Table hover variant="dark">
                                  <thead>
                                    <tr className="text-center">
                                      <th className="bg-transparent">Rank</th>
                                      <th className="bg-transparent">
                                        Winner Name
                                      </th>
                                      <th className="bg-transparent">
                                        Winning Ticket
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr className="text-center">
                                      <td className="bg-transparent">1st</td>
                                      <td className="bg-transparent">Mark</td>
                                      <td className="bg-transparent">137059</td>
                                    </tr>
                                    <tr className="text-center">
                                      <td className="bg-transparent">2nd</td>
                                      <td className="bg-transparent">Jacob</td>
                                      <td className="bg-transparent">932406</td>
                                    </tr>
                                    <tr className="text-center">
                                      <td className="bg-transparent">3rd</td>
                                      <td className="bg-transparent">Jacob</td>
                                      <td className="bg-transparent">769530</td>
                                    </tr>
                                  </tbody>
                                </Table>
                              </div>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3" className="custom-AccItem">
                          <Accordion.Header className="custom-Accheader">
                            <div className="d-flex align-items-center gap-2">
                              <div className="saleIcons">
                                <TbListDetails />
                              </div>
                              <div>Details</div>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body className="custom-Accbody">
                            <div>
                              <p className="d-flex justify-content-between">
                                <span>Total Tickets</span>
                                <span>5000</span>
                              </p>
                              <p className="d-flex justify-content-between">
                                <span>Tickets Sold</span>
                                <span>5000</span>
                              </p>
                              <p className="d-flex justify-content-between">
                                <span>Tickets Available</span>
                                <span>0</span>
                              </p>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
};

export default SinglePage;
