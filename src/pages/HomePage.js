import React from "react";

import IntroSection from "../components/IntroSection/IntroSection";
import ProjectSection from "../components/ProjectSection/ProjectSection";

const HomePage = (props) => {
  return (
    <div className="HomePage">
      <IntroSection />
      <ProjectSection />
    </div>
  );
};

export default HomePage;
