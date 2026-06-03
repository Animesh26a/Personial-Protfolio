import React from "react";
import "./Headline.css";
import { FaAsterisk } from "react-icons/fa";

const Headline = () => {
  return (
    <section className="headline">
      <div className="moving-text">
        <div className="container">
          <h5>Web Design</h5>
          <FaAsterisk className="star" />
          <h5>App Design</h5>
          <FaAsterisk className="star" />
          <h5>Responsive Design</h5>
          <FaAsterisk className="star" />
          <h5>UI/UX Design</h5>
          <FaAsterisk className="star" />
        </div>
        <div className="container">
          <h5>Web Design</h5>
          <FaAsterisk className="star" />
          <h5>App Design</h5>
          <FaAsterisk className="star" />
          <h5>Responsive Design</h5>
          <FaAsterisk className="star" />
          <h5>UI/UX Design</h5>
          <FaAsterisk className="star" />
        </div>
        <div className="container">
          <h5>Web Design</h5>
          <FaAsterisk className="star" />
          <h5>App Design</h5>
          <FaAsterisk className="star" />
          <h5>Responsive Design</h5>
          <FaAsterisk className="star" />
          <h5>UI/UX Design</h5>
          <FaAsterisk className="star" />
        </div>
      </div>
    </section>
  );
};

export default Headline;
