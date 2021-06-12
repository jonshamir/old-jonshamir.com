import React from "react";
import ProjectPage from "./ProjectPage";

const ProjectIllustrations = (props) => {
  return (
    <ProjectPage>
      <div className="section">
        <h1>Tel Aviv</h1>
        <p className="subtitle">Watercolor studies of Tel Aviv.</p>
        <br />
        <img
          src="assets/projects/illustrations/watercolor1.jpg"
          alt="Tel Aviv 1"
        />
        <br />
        <br />
        <br />
        <img
          src="assets/projects/illustrations/watercolor2.jpg"
          alt="Tel Aviv 2"
        />
        <br />
        <br />
        <br />
        <img
          src="assets/projects/illustrations/watercolor3.jpg"
          alt="Tel Aviv 3"
        />
        <br />
      </div>
    </ProjectPage>
  );
};

export default ProjectIllustrations;
