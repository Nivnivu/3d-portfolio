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
      "Bots and Automation creator": "botsTitle",
      "Full-Stack intern": "fullStackTitle",
      "Full-Stack Student": "studentTitle",
      "Self taught student": "selfTaughtTitle",
    };
    return keyMap[title];
  };

  const getCompanyKey = (company) => {
    const keyMap = {
      Bots4All: "botsCompany",
      Zipy: "zipyCompany",
      "Sv-college": "svCompany",
      "Udemy/Coursera": "udemyCompany",
    };
    return keyMap[company];
  };

  const getDateKey = (title, company, date) => {
    // Handle the two different "Self taught student" entries
    if (title === "Self taught student") {
      if (date.includes("April 2022 - July 2023")) {
        return "selfTaughtDate1";
      } else if (date.includes("March 2021 - April 2022")) {
        return "selfTaughtDate2";
      }
    }

    const keyMap = {
      "Bots and Automation creator": "botsDate",
      "Full-Stack intern": "zipyDate",
      "Full-Stack Student": "svDate",
    };
    return keyMap[title];
  };

  const getPointsKey = (title, company, date) => {
    // Handle the two different "Self taught student" entries
    if (title === "Self taught student") {
      if (date.includes("April 2022 - July 2023")) {
        return "selfTaughtPoints1";
      } else if (date.includes("March 2021 - April 2022")) {
        return "selfTaughtPoints2";
      }
    }

    const keyMap = {
      "Bots and Automation creator": "botsPoints",
      "Full-Stack intern": "zipyPoints",
      "Full-Stack Student": "svPoints",
    };
    return keyMap[title];
  };

  const titleKey = getTitleKey(experience.title);
  const companyKey = getCompanyKey(experience.company_name);
  const dateKey = getDateKey(
    experience.title,
    experience.company_name,
    experience.date
  );
  const pointsKey = getPointsKey(
    experience.title,
    experience.company_name,
    experience.date
  );

  // Special handling for the second "Self taught student" entry (Coursera)
  const isCoursera =
    experience.title === "Self taught student" &&
    experience.date.includes("March 2021 - April 2022");

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
          {isCoursera
            ? t("experience.courseraCompany")
            : companyKey
            ? t(`experience.${companyKey}`)
            : experience.company_name}
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
