import React from "react";
import "./AboutMe.css";
import AboutImage from "../../assets/about-image.png";
import CV from "../../assets/Resume.pdf";

const AboutMe = () => {
  return (
    <section>
      <div className=" flex gap-5 wrapper p-block-9 border-btm">
        <div className="about-image">
          <img src={AboutImage} />
        </div>
        <div className="about-content">
          <span className="sub-text overlay-text" datatype="About Me">
            About Me
          </span>
          <h2>
            Who is <span className="green-text">AG Animesh?</span>
          </h2>
          <p className="para">
            a web developer passionate about clean code, modern design, user
            experience, and building responsive, accessible, and high-performing
            digital products.
          </p>
          <div className="flex gap-2 m-block-3">
            <div>
              <h6>6000+</h6>
              <p>Projects Completed</p>
            </div>
            <div>
              <h6>20+</h6>
              <p>Industry Covered</p>
            </div>
            <div>
              <h6>06+</h6>
              <p>Year of Experience</p>
            </div>
          </div>

          <a href={CV} download="My CV" className="btn">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
