import React from "react";
import ProjectPage from "./ProjectPage";
import VideoEmbed from "../components/VideoEmbed/VideoEmbed";

const Scopus = (props) => {
  return (
    <ProjectPage>
      <div className="section">
        <h1>Scopus</h1>
        <p className="subtitle">Short 3D animation</p>
        <p>
          Mount Scopus and its brutalist architecture can be seen from
          practically anywhere in Jerusalem - clashing with the city's ancient
          architecture. I decided it might be used as a spaceship...
        </p>
        <p>Modeled & rendered using Cinema4D.</p>
        <br />
        <VideoEmbed videoId="7KkArk0uCDQ" />
        <p>
          <br />
        </p>
      </div>
    </ProjectPage>
  );
};

export default Scopus;
