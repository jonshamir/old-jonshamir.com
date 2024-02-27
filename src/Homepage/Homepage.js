import React, { useEffect } from "react";
import { motion } from "framer-motion";

import IntroSection from "./IntroSection/IntroSection";
import ProjectSection from "./ProjectSection/ProjectSection";
import FluidSim from "../components/FluidSim/FluidSim";

const Homepage = ({ scrollTop, setScrollTop, ...props }) => {
  // Scroll restoration
  useEffect(() => {
    window.scrollTo(0, scrollTop);
  });

  const onExit = (definition) => {
    if (definition.opacity === 0) {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      setScrollTop(scrollTop);
    }
  };

  return (
    <motion.div
      className="Page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onAnimationComplete={onExit}
      transition={{ duration: 0.2 }}
    >
      <FluidSim />
      <IntroSection />
      <ProjectSection />
    </motion.div>
  );
};

export default Homepage;
