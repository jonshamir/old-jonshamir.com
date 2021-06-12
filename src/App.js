import React from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Switch, useLocation } from "react-router-dom";

import FloatingLogo from "./components/FloatingLogo/FloatingLogo";
import ContourEffect from "./components/ContourEffect/ContourEffect";
import SocialLinks from "./components/SocialLinks/SocialLinks";

import projectData from "./projects/projectData.js";

import Homepage from "./Homepage/Homepage";

const App = () => {
  const location = useLocation();
  if (window.history.scrollRestoration)
    window.history.scrollRestoration = "manual";

  const projectPaths = projectData.map((project) => {
    return (
      <Route path={`/projects/${project.slug}`}>
        <project.component />
      </Route>
    );
  });

  return (
    <div>
      <ContourEffect shouldDisplay={location.pathname === "/"} />
      <FloatingLogo />
      <SocialLinks />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <Homepage />
          </Route>
          {projectPaths}
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default App;
