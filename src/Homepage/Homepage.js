import React from "react";
import { motion } from "framer-motion";

import IntroSection from "./IntroSection/IntroSection";
import ProjectSection from "./ProjectSection/ProjectSection";

const Homepage = (props) => {
  return (
    <motion.div
      className="Page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <IntroSection />
      <ProjectSection />
    </motion.div>
  );
};

export default Homepage;
