import React from "react";
import ContourEffect from "../components/ContourEffect/ContourEffect";
import Nav from "../components/Nav/Nav";
import SocialLinks from "../components/SocialLinks/SocialLinks";

import IntroSection from "../components/IntroSection/IntroSection";
import ProjectSection from "../components/ProjectSection/ProjectSection";

const HomePage = (props) => {
  return (
    <div className="HomePage">
      <ContourEffect />
      <Nav />
      <SocialLinks />

      <IntroSection />
      <ProjectSection />
    </div>
  );
};

export default HomePage;
