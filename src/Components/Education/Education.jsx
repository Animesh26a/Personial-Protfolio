import React from "react";
import { FaGraduationCap } from "react-icons/fa6";
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import "./Education.css";

const Education = () => {
  const Card = (props) => {
    return (
      <div className="card design">
        <div className="flex gap-1 border-btm p-bottom-1">
          <div className="icon-container green-inverse">{props.icon}</div>
          <h3>{props.title}</h3>
        </div>
        <div className="mt-2">
          {props.item.map((education) => {
            return (
              <div className="flex between mt-2" key={education.id}>
                <div>
                  <span className="sub-text">{education.institute}</span>
                  <p>{education.subtitle}</p>
                </div>
                <div className="list">{education.date}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  return (
    <section>
      <div className="wrapper p-block-9 border-btm">
        <div className="text-center">
          <span
            className="sub-text overlay-text middle"
            datatype="Education & Work"
          >
            Education & Work
          </span>
          <h2>
            My{" "}
            <span className="green-text">
              Academic &<br />
              Professional
            </span>{" "}
            Journey
          </h2>
        </div>
        <div className="flex gap-5 mt-5">
          <Card item={education} title="Education" icon={<FaGraduationCap />} />
          <Card
            item={workExperience}
            title="Work Experience"
            icon={<BsFillSuitcaseLgFill />}
          />
        </div>
      </div>
    </section>
  );
};

export default Education;

const education = [
  {
    id: 1,
    institute: "The University Of Burdwan",
    subtitle: "B.Sc. in Computer Science(Hons)",
    date: "2020-2023",
  },
  {
    id: 2,
    institute: "Tarahat Saradamoni High School",
    subtitle: "Higher Secondary Education in Science(12th)",
    date: "2018-2020",
  },
  {
    id: 3,
    institute: "Satberia High School",
    subtitle: "Secondary Education ( 10th )",
    date: "2017-2018",
  },
];

const workExperience = [
  {
    id: 1,
    institute: "Insightlancer",
    subtitle: "Senior Product Designer",
    date: "2018 – 2024",
  },
  {
    id: 2,
    institute: "Self-Employed",
    subtitle: "Visual Artist",
    date: "2016 – 2018",
  },
  {
    id: 3,
    institute: "KG Graphics Studio",
    subtitle: "Web Designer",
    date: "2014 – 2016",
  },
];
