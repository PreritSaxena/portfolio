import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { skills, educations, experience } from "../constants";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
    <section className="max-container">
      <h1 className="head-text text-white">
        Hello I'm
        <span className="blue-gradient_text font-semibold drop-shadow ">
          {" "}
          Prerit Saxena
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-white">
        <p>
          An ongoing B.Tech student who is enthusiastic about developing
          full-stack websites, problem-solving, and eager to learn new
          technologies. I'm passionate about creating efficient and dynamic web
          solutions, and I'm constantly seeking opportunities to expand my skill
          set and contribute to innovative projects.{" "}
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text text-white">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text text-white">Education</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate">
          <p className="text-white">
            My education has been a journey of self-discovery and growth. My
            educational details are as follows:
          </p>
        </div>

        <div className="mt-12 flex ">
          <VerticalTimeline>
            {educations.map((education) => (
              <VerticalTimelineElement
                key={education.company_name}
                date={education.date}
                icon={
                  <div>
                    <img
                      src={education.icon}
                      alt=""
                      className=" object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: education.iconBg }}
                contentStyle={{
                  background: "#1d1836",
                  color: "#fff",
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderColor: education.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-slate-300 text-xl font-poppins font-semibold ">
                    {education.title}
                  </h3>
                  <p
                    className="text-slate-300 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {education.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2 ">
                  {education.points.map((point, index) => (
                    <li
                      key={`education-point-${index}`}
                      className="text-slate-300 font-normal pl-1 text-sm "
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-white" />

      <div className="py-16">
        <h3 className="subhead-text text-white">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-white">
          <p>
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experience.map((experience, index) => (
              <VerticalTimelineElement
                key={index}
                date={experience.date}
                icon={
                  <div>
                    <img
                      src={experience.icon}
                      alt=""
                      className=" object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  background: "#1d1836",
                  color: "#fff",
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-slate-300 text-xl font-poppins font-semibold ">
                    {experience.title}
                  </h3>
                  <p
                    className="text-slate-300 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`education-point-${index}`}
                      className="text-slate-300 font-normal pl-1 text-sm "
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <CTA />
      
    </section>
    <Footer />
    </div>
    
  );
};

export default About;
