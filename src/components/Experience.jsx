import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  const { t } = useTranslation();

  const getTitleKey = (title) => {
    const keyMap = {
      "AI & Data Analyst": "botsTitle",
      "Full stack Developer": "zipyTitle",
      "Mentor & Teacher": "svTitle",
      Instructor: "udemyTitle",
      "Data Science Student": "courseraTitle",
    };
    return keyMap[title];
  };

  const getCompanyKey = (company) => {
    const keyMap = {
      Bots4all: "botsCompany",
      Zipy: "zipyCompany",
      "Sv-college": "svCompany",
      Udemy: "udemyCompany",
      Coursera: "courseraCompany",
    };
    return keyMap[company];
  };

  const getDateKey = (title) => {
    const keyMap = {
      "AI & Data Analyst": "botsDate",
      "Full stack Developer": "zipyDate",
      "Mentor & Teacher": "svDate",
      Instructor: "udemyDate",
      "Data Science Student": "courseraDate",
    };
    return keyMap[title];
  };

  const getPointsKey = (title) => {
    const keyMap = {
      "AI & Data Analyst": "botsPoints",
      "Full stack Developer": "zipyPoints",
      "Mentor & Teacher": "svPoints",
      Instructor: "udemyPoints",
      "Data Science Student": "courseraPoints",
    };
    return keyMap[title];
  };

  const titleKey = getTitleKey(experience.title);
  const companyKey = getCompanyKey(experience.company_name);
  const dateKey = getDateKey(experience.title);
  const pointsKey = getPointsKey(experience.title);

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={dateKey ? t(`experience.${dateKey}`) : experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">
          {titleKey ? t(`experience.${titleKey}`) : experience.title}
        </h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {companyKey ? t(`experience.${companyKey}`) : experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => {
          const translatedPoints = pointsKey
            ? t(`experience.${pointsKey}`, { returnObjects: true })
            : null;
          const translatedPoint =
            translatedPoints && Array.isArray(translatedPoints)
              ? translatedPoints[index]
              : null;

          return (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {translatedPoint || point}
            </li>
          );
        })}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { t } = useTranslation();

  return (
    <div dir="ltr">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          {t("sections.experienceSubtitle")}
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          {t("sections.experienceTitle")}
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");
