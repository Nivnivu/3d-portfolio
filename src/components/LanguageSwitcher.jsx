import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  // Set document direction based on language
  useEffect(() => {
    const isRtl = i18n.language === "he";
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "he", name: "עברית", flag: "🇮🇱" },
  ];

  return (
    <div className="relative inline-block">
      <select
        value={i18n.language}
        onChange={(e) => changeLanguage(e.target.value)}
        className="appearance-none bg-transparent border border-secondary rounded px-3 py-1 pr-8 text-white text-sm cursor-pointer hover:border-white transition-colors duration-300 focus:outline-none focus:border-white"
        style={{
          backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 0.5rem center",
          backgroundSize: "1em",
        }}
      >
        {languages.map((lang) => (
          <option
            key={lang.code}
            value={lang.code}
            className="bg-primary text-white"
          >
            {lang.flag}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
