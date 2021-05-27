import React from "react";
import ProjectPage from "./ProjectPage";
import VideoEmbed from "../components/VideoEmbed/VideoEmbed";

const ProjectAnimations = (props) => {
  return (
    <ProjectPage>
      <div className="section">
        <h1>Animations</h1>
        <p className="subtitle">2D & 3D</p>
        <p>
          <br />
        </p>
        <h2>Scopus</h2>
        <p>Modeled & rendered using Cinema4D</p>
        <VideoEmbed videoId="7KkArk0uCDQ" />
        <p>
          <br />
        </p>
        <h2>Cavorite</h2>
        <p>Made using After Effects</p>
        <VideoEmbed videoId="bulTbi_Eno0" />
      </div>
    </ProjectPage>
  );
};

export default ProjectAnimations;
