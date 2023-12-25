import "./hero3.css";
import PropTypes from "prop-types";

function Hero3({ theme }) {
  const imgSrc = `asserts/images/Hero3${theme}.png`;

  return (
    <div className="hero3-container">
      <div className="hero3-content-container">
        <div className="hero_03_content">
          <h4>SUBTITLE</h4>
          <h1>Our product is available for use</h1>
          <p>
            A project is a temporary endeavor designed to produce a unique
            product, service or result with a defined beginning and end
            undertaken to meet unique goals and objectives, typically to bring
            about beneficial change or added value. The object of project
            management is to produce a complete project which complies with the
            client's objectives.
          </p>
        </div>
      </div>
      <div className="hero3-img-container">
        {" "}
        <img src={imgSrc} alt="HERO 3" />
      </div>
    </div>
  );
}

Hero3.propTypes = {
  theme: PropTypes.oneOf(["black", "white"]).isRequired,
};

export default Hero3;
