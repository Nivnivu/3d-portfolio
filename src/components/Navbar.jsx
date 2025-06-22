import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close, modernLogo } from "../assets";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const { t } = useTranslation();

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-6xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {" "}
          <img
            src={modernLogo}
            alt="logo"
            className="w-9 h-9 object-contain rounded-full"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            {t("header.title")} &nbsp;
            <span className="md:block hidden">| {t("header.subtitle")}</span>
          </p>
        </Link>
        <ul className="list-non hidden md:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{t(`nav.${link.id}`)}</a>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <LanguageSwitcher />
        </div>
        <div className="md:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute
          top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-non flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{t(`nav.${link.id}`)}</a>
                </li>
              ))}

              <li className="pt-2">
                <LanguageSwitcher />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
