import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedBackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  signedFile,
}) => {
  const { t } = useTranslation();

  // Get translated testimonials array
  const translatedTestimonials = t("testimonials", { returnObjects: true });

  // Find the matching testimonial by name or use index as fallback
  const getTestimonialByName = (name) => {
    // Map the original names to the array indices
    const nameToIndex = {
      "Yaniv Almog": 0,
      Yura: 1,
      Dima: 2,
    };

    const testimonialIndex = nameToIndex[name];
    return testimonialIndex !== undefined
      ? translatedTestimonials[testimonialIndex]
      : null;
  };

  const translatedTestimonial = getTestimonialByName(name);

  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <p className="text-white font-black text-[48px]">"</p>

      <div className="mt-1">
        <p className="text-white tracking-wider text-[18x]">
          {translatedTestimonial ? translatedTestimonial.text : testimonial}
        </p>
        <br />
        <a
          href={signedFile}
          className="text-blue-400 hover:text-blue-600"
          target="_blank"
        >
          {t("sections.fullRecommendation")}
        </a>
        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span>{" "}
              {translatedTestimonial ? translatedTestimonial.name : name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {translatedTestimonial
                ? translatedTestimonial.designation
                : designation}{" "}
              of{" "}
              {translatedTestimonial ? translatedTestimonial.company : company}
            </p>
          </div>
          <img
            src={image}
            alt={`feedback-by-${name}`}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding}
    bg-tertiary rounded-2xl min-h-[300px]
    `}
      >
        <motion.div
          className={`${styles.padding}
      bg-tertiary rounded-2xl min-h-[300px]`}
        >
          <p className={styles.sectionSubText}>
            {t("sections.testimonialsSubtitle")}
          </p>
          <h2 className={styles.sectionHeadText}>
            {t("sections.testimonialsTitle")}
          </h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedBackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
