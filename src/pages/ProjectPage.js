import React from "react";
import { motion } from "framer-motion";

import "./ProjectPage.scss";

const ProjectPage = (props) => {
  return (
    <motion.div
      className="ProjectPage Page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {props.children}
    </motion.div>
  );
};

export default ProjectPage;
