import React from "react";
import { withRouter } from "react-router-dom";
import Button from "../components/Button/Button";

import "./ProjectPage.scss";

const ProjectPage = (props) => {
  const { slug } = props.match.params;

  return (
    <div className="ProjectPage">
      <h1>Muser</h1>
      <Button>View Live</Button>
    </div>
  );
};

export default withRouter(ProjectPage);
