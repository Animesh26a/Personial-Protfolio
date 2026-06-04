import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaPaperPlane,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="flex between border-btm p-block-2 gap-4">
          <h2>
            Let's <span className="green-text">Connect</span> There
          </h2>
          <a href="#" className="btn self-end">
            Hire Me Now
          </a>
        </div>
        <div className="p-block-7 flex flex-start flex-wrap gap-4">
          <div className="footer-wrapper">
            <Link to="/" className="logo">
              <span>AG</span>Animesh
            </Link>
            <p className="mt-2">
              I'm an experienced web designer with 6+ years in the field,
              Collaborating with various companies and startups
            </p>
            <div className="flex gap-1 mt-2">
              <a href="" className="icon-container green-inverse">
                <FaFacebookF />
              </a>
              <a href="" className="icon-container green-inverse">
                <FaXTwitter />
              </a>
              <a href="" className="icon-container green-inverse">
                <FaPinterestP />
              </a>
              <a href="" className="icon-container green-inverse">
                <FaInstagram />
              </a>
              <a href="" className="icon-container green-inverse">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <ul className="footer-wrapper">
            <li>
              <h6>Nvigation</h6>
            </li>
            <li className="mt-2">
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li className="mt-2">
              <Link to="services" className="link">
                Services
              </Link>
            </li>
            <li className="mt-2">
              <Link to="/aboutme" className="link">
                About Me
              </Link>
            </li>
            <li className="mt-2">
              <Link to="projects" className="link">
                Projects
              </Link>
            </li>
            <li className="mt-2">
              <Link to="testimonial" className="link">
                Testimonials
              </Link>
            </li>
            <li className="mt-2">
              <Link to="contactme" className="link">
                Contact Us
              </Link>
            </li>
          </ul>
          <ul className="footer-wrapper">
            <li>
              <h6>Contact</h6>
            </li>
            <li className="mt-2">
              <a href="#" className="link">
                0123-456-789
              </a>
            </li>
            <li className="mt-2">
              <a href="#" className="link">
                www.example.com
              </a>
            </li>
            <li className="mt-2">
              <a href="#" className="link">
                example@gmail.com
              </a>
            </li>
            <li className="mt-2">
              <a href="#" className="link">
                2464 Royal Ln. Mesa,
                <br />
                New Jersey 45663
              </a>
            </li>
          </ul>
          <div className="footer-wrapper">
            <h6>Get the latest Information</h6>
            <div className="footer-input mt-2 flex stretch">
              <input
                type="email"
                autoComplete="off"
                placeholder="Email Here"
                className="email-field"
              />
              <button className="input-btn">
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="wrapper flex between">
          <p>Copyright © Animesh. All Rights Reserved</p>
          <p>User Terms & Condition | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
