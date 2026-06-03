import React from "react";
import Project1 from "../../assets/project1.jpg";
import Project2 from "../../assets/project2.jpg";
import Project3 from "../../assets/project3.jpg";
import { FaArrowRight } from "react-icons/fa";
import "./Projects.css";

const Projects = () => {
  const renderProjectsData = projectsData.map((project) => {
    return (
      <div className="card flex gap-5 project" key={project.id}>
        <div className="project-image">
          <img src={project.image} />
        </div>
        <div className="project-content">
          <ul className="flex gap-1">
            {project.tech.map((technology) => {
              return (
                <li key={technology.id} className="list">
                  {technology.list}
                </li>
              );
            })}
          </ul>
          <h3 className="mt-2">{project.title}</h3>
          <p className="para">{project.description}</p>
          <a href="#" className="icon-container border-inverse rotate">
            <FaArrowRight />
          </a>
        </div>
      </div>
    );
  });
  return (
    <section>
      <div className="wrapper p-block-9">
        <div className="flex between gap-4">
          <div>
            <span className="sub-text overlay-text" datatype="My Portfolio">
              My Portfolio
            </span>
            <h2>
              Let's Have a Look
              <br />
              at
              <span className="green-text"> My Portfolio</span>
            </h2>
          </div>
          <a href="#" className="btn self-end">
            View All Projects
          </a>
        </div>
        <div className="flex column gap-2 mt-5">{renderProjectsData}</div>
      </div>
    </section>
  );
};

export default Projects;

const projectsData = [
  {
    id: 1,
    title: "Smart Financial Dashboard for Digital Management",
    description:
      "A modern, user-friendly dashboard for tracking income, expenses, analytics, and card details with quick transfer and activity summaries.",
    image: Project1,
    tech: [
      {
        id: 1,
        list: "React js",
      },
      {
        id: 2,
        list: "MUI css",
      },
      {
        id: 3,
        list: "Chart js",
      },
    ],
  },
  {
    id: 2,
    title: "Modern VPN App Interface for Secure Connectivity",
    description:
      "A sleek VPN mobile interface offering server selection, speed monitoring, and premium subscription options for secure, ad-free browsing.",
    image: Project2,
    tech: [
      {
        id: 1,
        list: "Flutter",
      },
      {
        id: 2,
        list: "Dark",
      },
      {
        id: 3,
        list: "Figma",
      },
    ],
  },
  {
    id: 3,
    title: "Fruity Juice Ordering App with Elegant Interface",
    description:
      "A vibrant mobile app for browsing, selecting, and ordering delicious fruit juices with detailed product information and customer reviews.",
    image: Project3,
    tech: [
      {
        id: 1,
        list: "Flutter",
      },
      {
        id: 2,
        list: "Dark",
      },
      {
        id: 3,
        list: "Adobe XD",
      },
    ],
  },
];
