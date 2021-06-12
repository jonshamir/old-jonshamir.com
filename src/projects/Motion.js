import React from "react";
import ProjectPage from "./ProjectPage";
import VideoEmbed from "../components/VideoEmbed/VideoEmbed";

const ProjectMotion = (props) => {
  return (
    <ProjectPage>
      <div className="section">
        <h1>Motion</h1>
        <p className="subtitle">2D & 3D animations</p>
        <p>
          <br />
        </p>
        <h2>Scopus</h2>
        <p>
          Mount Scopus and its brutalist architecture can be seen from
          practically anywhere in Jerusalem - clashing with the city's ancient
          architecture (in my opinion). I decided to launch it into space...
        </p>
        <p>Modeled & rendered using Cinema4D.</p>
        <VideoEmbed videoId="7KkArk0uCDQ" />
        <p>
          <br />
        </p>
        <h2>Cavorite</h2>
        <p>
          Short animation based on an old H.G. Wells story, created as an
          assignment for an animation course.
        </p>
        <p>Made using After Effects & Blender.</p>
        <VideoEmbed videoId="bulTbi_Eno0" />
      </div>
    </ProjectPage>
  );
};

export default ProjectMotion;
