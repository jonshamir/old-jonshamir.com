import React from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Switch, useLocation } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/project/:slug">
          <ProjectPage />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default App;
