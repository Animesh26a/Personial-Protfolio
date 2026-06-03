import React from "react";
import "./Services.css";
import { FaPenRuler } from "react-icons/fa6";
import { FaPenNib, FaLaptopCode, FaArrowRight } from "react-icons/fa";

const Services = () => {
  const renderServicesData = servicesData.map((service) => {
    return (
      <div className="card design" key={service.id}>
        <span className="service-icon">{service.icon}</span>
        <h4 className="m-block-1">{service.title}</h4>
        <p className="m-block-1 hide-text">{service.description}</p>
        <a href="#" className="link">
          Learn More &nbsp;
          <FaArrowRight className="arrow green-text" />
        </a>
      </div>
    );
  });
  return (
    <section>
      <div className="wrapper p-block-9 border-btm">
        <div className="flex between gap-4">
          <div>
            <span className="sub-text overlay-text" datatype="Services">
              My Specialzation
            </span>
            <h2>
              <span className="green-text">Services</span> I Provide
            </h2>
          </div>
          <a href="#" className="btn self-end">
            View All Services
          </a>
        </div>
        <div className="flex gap-2 mt-5 stretch">{renderServicesData}</div>
      </div>
    </section>
  );
};

export default Services;

const servicesData = [
  {
    id: 1,
    title: "UI/UX Design",
    description:
      "I offer professional UI/UX design services that blend aesthetics with functionality, creating intuitive, user-friendly interfaces. My designs enhance user engagement, ensure seamless experiences, and align perfectly with your brand’s goals across web and mobile platforms.",
    icon: <FaPenRuler />,
  },
  {
    id: 2,
    title: "Application Design",
    description:
      "I provide professional app design services, creating user-friendly and visually engaging interfaces tailored to your brand. My designs focus on functionality, aesthetics, and seamless user experience, helping your app stand out and connect effectively with your target audience.",
    icon: <FaPenNib />,
  },
  {
    id: 3,
    title: "Website Design",
    description:
      "I offer professional website design services that combine creativity and functionality to build visually stunning, user-friendly websites. My designs enhance brand identity, improve user experience, and drive engagement, helping businesses establish a strong online presence and achieve their digital goals.",
    icon: <FaLaptopCode />,
  },
];
