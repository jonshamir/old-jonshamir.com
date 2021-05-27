import React from "react";
import { withRouter } from "react-router-dom";

const ProjectPage = (props) => {
  const { slug } = props.match.params;

  return (
    <div className="ProjectPage">
      <h1>{slug}</h1>
    </div>
  );
};

export default withRouter(ProjectPage);
