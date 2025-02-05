"use client";
import { SectionWrapper } from "@/components/HigherOrderComponents";
import { experiences } from "@/app/constants";
import { textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

type ExperienceCardProps = {
  experience: (typeof experiences)[0];
};

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <VerticalTimelineElement
      visible={true}
      contentStyle={{
        background: "#ed69ff0f",
        color: "#fff",
        boxShadow: "none"
      }}
      contentArrowStyle={{ borderRight: "none" }}
      // date={experience.date}
      iconStyle={{ background: '#fff', boxShadow: 'none', width: '12px', height: '12px', marginLeft: '14px', top: '30px' }}
    >
      <div>
        <span className="text-[12px] text-purple-300">{experience.date}</span>
        <h3 className="text-white text-[24px] font-bold mt-2">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name} 
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="styles.sectionSubText text-center">
          What I have done so far
        </p>
        <h2 className="sectionHeadText text-center">Work Experience.</h2>
      </motion.div>

      <div className="mt-20 w-full">
        <VerticalTimeline layout="1-column-left">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
