import "./hero4.css";
import PropTypes from "prop-types";

function Hero3({ theme }) {
  const imgSrc = `asserts/images/Hero4${theme}.png`;

  return (
    <div
      className="hero4-container"
      style={{
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: "cover",
      }}
    >
      <div className="hero4-content-wrapper">
        <h1>Spring/Summer Collection</h1>
        <p>03/04/2019 - 03/05/2019</p>
        <div className="hero4-content-address">
          27 Merry Lane NP000126854 <br />
          New Jersey, East Hanover, 07936
        </div>
      </div>
    </div>
  );
}

Hero3.propTypes = {
  theme: PropTypes.oneOf(["black", "white"]).isRequired,
};

export default Hero3;
