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
  const { t, i18n } = useTranslation();
  const isHebrew = i18n.language === "he";

  const getTitleKey = (title) => {
    const keyMap = {
      "Full-Stack Developer": "fullStackTitle",
      "Bots and Automation Developer": "botsTitle",
      "Web & Mobile App Developer": "appsTitle",
    };
    return keyMap[title];
  };

  const getCompanyKey = (company) => {
    const keyMap = {
      Zipy: "zipyCompany",
      Bots4All: "botsCompany",
      Apps4All: "appsCompany",
    };
    return keyMap[company];
  };

  const getDateKey = (title) => {
    const keyMap = {
      "Full-Stack Developer": "zipyDate",
      "Bots and Automation Developer": "botsDate",
      "Web & Mobile App Developer": "appsDate",
    };
    return keyMap[title];
  };

  const getPointsKey = (title) => {
    const keyMap = {
      "Full-Stack Developer": "zipyPoints",
      "Bots and Automation Developer": "botsPoints",
      "Web & Mobile App Developer": "appsPoints",
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
      <div dir={isHebrew ? "rtl" : "ltr"}>
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

      <ul
        className={`mt-5 list-disc space-y-2 ${isHebrew ? "mr-5" : "ml-5"}`}
        dir={isHebrew ? "rtl" : "ltr"}
      >
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
              className={`text-white-100 text-[14px] tracking-wider ${
                isHebrew ? "pr-1" : "pl-1"
              }`}
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
