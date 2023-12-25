import "./hero2.css";
import PropTypes from "prop-types";

function Hero2({ theme }) {
  const imgSrc = `asserts/images/Hero2${theme}.png`;

  return (
    <div className="container main-container">
      <div className="text-container">
        <h1>Short description of the project</h1>
        <h3>
          Description is the pattern of narrative development that aims to make
          vivid a place, object, character, or group.
        </h3>
        <div>
          <h4>Exposition</h4>
          <p>
            is the insertion of background information within a story or
            narrative
          </p>
        </div>
        <div>
          <h4>Argumentation</h4>
          <p>
            is the interdisciplinary study of how conclusions can be reached
            through logical reasoning
          </p>
        </div>
        <button className="d-flex">
          <span>Discover more </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-arrow-down-short"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"
              />
            </svg>
          </span>
        </button>
      </div>
      <div className="image-container">
        <img src={imgSrc} alt="HERO 2" />
      </div>
    </div>
  );
}

Hero2.propTypes = {
  theme: PropTypes.oneOf(["black", "white"]).isRequired,
};

export default Hero2;
