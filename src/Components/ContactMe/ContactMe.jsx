import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <section>
      <div className="wrapper p-block-9 border-btm">
        <div className="text-center">
          <span className="sub-text overlay-text middle" datatype="Contact me">
            contact me
          </span>
          <h2>
            Let's Talk For
            <span className="green-text">
              {" "}
              Your
              <br />
              Next Projects
            </span>
          </h2>
        </div>
        <div className="flex gap-5 mt-5 stretch">
          <form action="">
            <div className="flex gap-2">
              <div className="input-container">
                <label htmlFor="name">Your Name*</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  autoComplete="off"
                  placeholder="Ex:John Deo"
                  className="input-field"
                />
              </div>
              <div className="input-container">
                <label htmlFor="email">Email*</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  required
                  autoComplete="off"
                  placeholder="example@gmail.com"
                  className="input-field"
                />
              </div>
            </div>
            <div className="flex gap-2 mt-1">
              <div className="input-container">
                <label htmlFor="phone">Phone*</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  autoComplete="off"
                  placeholder="Enter Phone Number"
                  className="input-field"
                />
              </div>
              <div className="input-container">
                <label htmlFor="interest">I'am interested in*</label>
                <br />
                <select
                  name="interest"
                  id="interest"
                  defaultValue="Select"
                  className="input-field select"
                >
                  <option disabled value="Select">
                    Select
                  </option>
                  <option value="Canada">Canada</option>
                  <option value="UAE">UAE</option>
                  <option value="Spain">Spain</option>
                </select>
              </div>
            </div>
            <div className="flex gap-2 mt-1">
              <div className="input-container">
                <label htmlFor="range">Budge Range(USD)*</label>
                <br />
                <select
                  name="range"
                  id="range"
                  defaultValue="Select"
                  className="input-field select"
                >
                  <option disabled value="Select">
                    Select
                  </option>
                  <option value="Canada">$100-$500</option>
                  <option value="UAE">$500-$1000</option>
                  <option value="Spain">$1000+</option>
                </select>
              </div>
              <div className="input-container">
                <label htmlFor="Country">Country*</label>
                <br />
                <select
                  name="Country"
                  id="Country"
                  defaultValue="Select"
                  className="input-field select"
                >
                  <option disabled value="Select">
                    Select
                  </option>
                  <option value="Canada">Canada</option>
                  <option value="UAE">UAE</option>
                  <option value="Spain">Spain</option>
                </select>
              </div>
            </div>
            <div className="mt-1">
              <label htmlFor="message">Your Message*</label>
              <br />
              <textarea
                name="message"
                id="message"
                placeholder="Enter here..."
                required
                className="input-field"
                rows={9}
              ></textarea>
            </div>
            <div className="mt-1">
              <a href="#" className="btn">
                Send Message
              </a>
            </div>
          </form>
          <div className="info">
            <div className="detail gap-4">
              <div>
                <h6>Address</h6>
                <p>
                  2464 Royal Ln. Mesa,
                  <br />
                  New Jersey 45663
                </p>
              </div>
              <div>
                <h6>Contact</h6>
                <p>
                  Phone:0123-456-789
                  <br />
                  Email:example@gmail.com
                </p>
              </div>
              <div>
                <h6>Time</h6>
                <p>
                  Monday-Friday: 10:00 - 08:00
                  <br />
                  Saturday - Sunday: 10:00 - 06:00
                </p>
              </div>
            </div>
            <div className="bg-header rounded-b">
              <h5>Stay Connected</h5>
              <div className="flex gap-1 mt-2">
                <a href="" className="icon-container black-inverse">
                  <FaFacebookF />
                </a>
                <a href="" className="icon-container black-inverse">
                  <FaXTwitter />
                </a>
                <a href="" className="icon-container black-inverse">
                  <FaPinterestP />
                </a>
                <a href="" className="icon-container black-inverse">
                  <FaInstagram />
                </a>
                <a href="" className="icon-container black-inverse">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
