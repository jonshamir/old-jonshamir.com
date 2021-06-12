import React from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Switch, useLocation } from "react-router-dom";

import FloatingLogo from "./components/FloatingLogo/FloatingLogo";
import ContourEffect from "./components/ContourEffect/ContourEffect";
import SocialLinks from "./components/SocialLinks/SocialLinks";

import Homepage from "./Homepage/Homepage";
import Muser from "./projects/Muser";
import Motion from "./projects/Motion";
import UnityCG from "./projects/UnityCG";
import Illustrations from "./projects/Illustrations";

const App = () => {
  const location = useLocation();
  if (window.history.scrollRestoration)
    window.history.scrollRestoration = "manual";

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
          <Route path="/projects/muser">
            <Muser />
          </Route>
          <Route path="/projects/motion">
            <Motion />
          </Route>
          <Route path="/projects/unitycg">
            <UnityCG />
          </Route>
          <Route path="/projects/illustrations">
            <Illustrations />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default App;
