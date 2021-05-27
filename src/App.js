import React from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Switch, Link, useLocation } from "react-router-dom";

import FloatingLogo from "./components/FloatingLogo/FloatingLogo";
import ContourEffect from "./components/ContourEffect/ContourEffect";
import Nav from "./components/Nav/Nav";
import SocialLinks from "./components/SocialLinks/SocialLinks";

import HomePage from "./pages/HomePage";
import ProjectMuser from "./pages/ProjectMuser";

const App = () => {
  const location = useLocation();

  return (
    <div>
      <ContourEffect shouldDisplay={location.pathname === "/"} />
      <FloatingLogo />
      <Nav />
      <SocialLinks />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/project/muser">
            <ProjectMuser />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default App;
