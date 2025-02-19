import { useState } from "react";
import { Modal } from "react-bootstrap";

const WinnerList = ({ winnerData }) => {
  const {
    winnerEmail,
    winnerImg,
    winnerNumber,
    modalBanner,
    priceWinner,
    contestDetails,
    usdtNum,
    winningNum,
    winnerName,
  } = winnerData;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="winner-box-wrapper" onClick={handleShow}>
        <div>
          <h5 className="mb-0">{winnerEmail}</h5>
        </div>
        <div className="winnerImg-wrapper">
          <img src={winnerImg} alt="" />
        </div>
        <div>
          <span>Received {winnerNumber} BNB</span>
        </div>
      </div>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} className="winnermodal" centered>
        <Modal.Body>
          <>
            <Modal.Header closeButton className="border-0"></Modal.Header>
            <div className="onHoverWinnerDetails">
              <div className="winnerDetialsTop">
                <img src={modalBanner} alt="" />
              </div>
              <div className="winnerUser">
                <img src={winnerImg} alt="" />
                <h5>{winnerName}</h5>
              </div>
              <div className="winnerUserDetails p-3 pt-0">
                <h4>{priceWinner}</h4>
                <p>Contest: {contestDetails}</p>
                <div className="d-flex justify-content-between text-start">
                  <div>
                    <span>Prize</span>
                    <h6>{usdtNum} USDT</h6>
                  </div>
                  <div>
                    <span>Winning Number</span>
                    <h6>#{winningNum}</h6>
                  </div>
                </div>
              </div>
            </div>
          </>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default WinnerList;
