import React from "react";
import ProjectPage from "./ProjectPage";
import VideoEmbed from "../components/VideoEmbed/VideoEmbed";

const Cavorite = (props) => {
  return (
    <ProjectPage>
      <div className="section">
        <h1>Cavorite</h1>
        <p className="subtitle">Short 2D animation</p>
        <p>
          Short animation based on an old H.G. Wells story, created as an
          assignment for an animation course.
        </p>
        <p>Made using After Effects & Blender.</p>
        <VideoEmbed videoId="bulTbi_Eno0" />
        <p>
          <br />
        </p>
      </div>
    </ProjectPage>
  );
};

export default Cavorite;
