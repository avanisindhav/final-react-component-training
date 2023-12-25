import PropTypes from "prop-types";
import "./hero1.css";

function Hero1({ theme }) {
  const imgSrc = `asserts/images/Hero01${theme}.png`;

  return (
    <div className={`container hero_01 ${theme}`}>
      <div className="hero_01_img_wrapper">
        <img src={imgSrc} alt="hero page " />
        <div className="btn-container">
          <a className="arrow left_arrow" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-left "
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
              />
            </svg>
          </a>
          <a className="arrow right_arrow" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="hero_01_content">
        <h4>SUBTITLE</h4>
        <h1>Product is an object made available for consumer use</h1>
        <p>
          Description is the pattern of narrative development that aims to make
          vivid a place, object, character, or group.
        </p>
      </div>
    </div>
  );
}

Hero1.propTypes = {
  theme: PropTypes.oneOf(["black", "white"]).isRequired,
};

export default Hero1;
