const FeaturesCard = ({featuresCards}) => {
    const {featureImg,title,para} = featuresCards;
  return (
    <>
      <div className="featuresCard">
        <div className="featureBanner">
          <img src={featureImg} alt="" className="img-fluid" />
        </div>
        <div className="featureContent">
          <h5>{title}</h5>
          <p className="mb-0">
            {para}
          </p>
        </div>
      </div>
    </>
  );
};

export default FeaturesCard;
