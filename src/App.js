import React from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Switch, useLocation } from "react-router-dom";

import FloatingLogo from "./components/FloatingLogo/FloatingLogo";
import ContourEffect from "./components/ContourEffect/ContourEffect";
import SocialLinks from "./components/SocialLinks/SocialLinks";

import HomePage from "./pages/HomePage";
import ProjectMuser from "./pages/ProjectMuser";
import ProjectAnimations from "./pages/ProjectAnimations";
import ProjectCG from "./pages/ProjectCG";

const App = () => {
  const location = useLocation();

  return (
    <div>
      <ContourEffect shouldDisplay={location.pathname === "/"} />
      <FloatingLogo />
      <SocialLinks />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/project/muser">
            <ProjectMuser />
          </Route>
          <Route path="/project/animations">
            <ProjectAnimations />
          </Route>
          <Route path="/project/unitycg">
            <ProjectCG />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default App;
