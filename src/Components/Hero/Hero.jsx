import React from "react";
import HeroImage from "../../assets/hero-image.png";
import "./Hero.css";
import CV from "../../assets/Resume.pdf";

const Hero = () => {
  return (
    <section>
      <div className="hero-section flex wrapper gap-4">
        <div className="hero-content">
          <span className="sub-text">Hello There!</span>
          <h1>
            <span className="green-text">I'm QJ Animesh,</span>
            <br />
            Web Developer based in UAE.
          </h1>
          <p className="para">
            I'm an experienced web designer with 6+ years in the field,
            Collaborating with various companies and startups
          </p>
          <div className="flex gap-2">
            <a href="#" className="btn">
              View My Works
            </a>
            <a href={CV} download="My CV" className="btn border-btn">
              Download CV
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={HeroImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
