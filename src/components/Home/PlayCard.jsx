const PlayCard = ({ playData }) => {
  const { playicon, playnum, playtitle, playdec } = playData;
  return (
    <>
      <div className="playCard">
        <div className="playIcon">
          <span>{playicon}</span>
        </div>
        <div className="playContent">
          <h5>
            {playnum}{" "}{playtitle}
          </h5>
          <p>{playdec}</p>
        </div>
      </div>
    </>
  );
};

export default PlayCard;
