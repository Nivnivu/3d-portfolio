import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const { t } = useTranslation();
  const [showCanvas, setShowCanvas] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () =>
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  // Fallback component for when 3D fails
  const CanvasFallback = () => (
    <div className="absolute inset-0 flex justify-center items-center">
      <div className="w-60 h-60 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 rounded-full opacity-30 animate-pulse"></div>
    </div>
  );

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {t("hero.greeting")}{" "}
            <span className="text-[#915EFF]">{t("hero.name")}</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {t("hero.description")}
            <br className="sm:block hidden" />
            {t("hero.descriptionLine2")}
          </p>
        </div>
      </div>

      {/* Conditional rendering of 3D canvas with error boundary */}
      {showCanvas ? (
        <div
          onError={() => setShowCanvas(false)}
          style={{
            willChange: isMobile ? "auto" : "transform",
            backfaceVisibility: "hidden",
          }}
        >
          <ComputersCanvas />
        </div>
      ) : (
        <CanvasFallback />
      )}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
