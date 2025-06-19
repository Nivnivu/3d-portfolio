import { BrowserRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Projects,
  StarsCanvas,
  Certificates,
} from "./components";

const App = () => {
  const { i18n } = useTranslation();

  // Determine font class based on current language
  const fontClass = i18n.language === "he" ? "font-hebrew" : "font-english";

  return (
    <BrowserRouter>
      <div className={`relative z-0 bg-primary ${fontClass}`}>
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div className="relative z-0">
          {" "}
          <About />
          <Experience /> <Projects /> <Tech /> <Feedbacks />
          <Contact />
          <Certificates />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
