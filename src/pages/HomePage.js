import React from "react";
import { motion } from "framer-motion";

import IntroSection from "../components/IntroSection/IntroSection";
import ProjectSection from "../components/ProjectSection/ProjectSection";

const HomePage = (props) => {
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

export default HomePage;
