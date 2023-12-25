import { useState } from "react";
import Hero1 from "./components/hero1/hero1.jsx";
import Hero2 from "./components/hero2/hero2.jsx";
import Hero3 from "./components/hero3/hero3.jsx";
import Hero4 from "./components/hero4/hero4.jsx";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("white");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "black" ? "white" : "black"));
  };

  return (
    <>
      <div className="theme-toggle-container">
        <button
          className={`theme-toggle-button ${
            theme === "black" ? "black" : "white"
          }`}
          onClick={toggleTheme}
        >
          Toggle Theme
        </button>
      </div>
      <section id="hero1" className={`heroSection ${theme}`}>
        <Hero1 theme={theme} />
      </section>
      <section id="hero2" className={`heroSection ${theme}`}>
        <Hero2 theme={theme} />
      </section>
      <section id="hero3" className={`heroSection ${theme}`}>
        <Hero3 theme={theme} />
      </section>
      <section id="hero4" className={`heroSection ${theme}`}>
        <Hero4 theme={theme} />
      </section>
    </>
  );
}

export default App;
