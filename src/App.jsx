import { BrowserRouter } from "react-router-dom";

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
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
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
