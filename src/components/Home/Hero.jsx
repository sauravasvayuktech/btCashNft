import { BsFillPatchCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Hero = ({ banner }) => {
  const { heroSection, imgAlt, title, author, valueNum, urlView, shortImg } =
    banner;

  return (
    <div className={heroSection}>
      <div className="hero-content-wrapper">
        <div className="hero-content-wrapperAll">
          <div className="shortImg-hero">
            <img src={shortImg} alt={imgAlt} />
          </div>
          <div className="heroTextInfo">
            <h2 className="d-flex align-items-center gap-2">{title} <span className="fs-5"><BsFillPatchCheckFill /></span></h2>
            <h6 className="d-flex align-items-center gap-2">{author} <span className="fs-6"><BsFillPatchCheckFill /></span></h6>
            <h6>{valueNum}</h6>
          </div>
        </div>
        <Link to={urlView} className="hero-second-div">
          <div className="authText py-3 px-4 collectionBtn">
            View Collection
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
