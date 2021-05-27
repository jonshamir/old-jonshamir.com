import React from "react";

import "./ProjectSection.scss";

const ProjectSection = (props) => {
  return (
    <div className="ProjectSection section">
      <h2>Recent Projects</h2>
      <div className="projectTiles">
        <div className="ProjectTile">
          <img src="images/projects/muser.jpg" />
          <h3>
            Muser <span>/ Smart music visualizer</span>
          </h3>
        </div>
        <div className="ProjectTile">
          <img src="images/projects/animations.jpg" />
          <h3>
            Animations <span>/ 2D & 3D</span>
          </h3>
        </div>
        <div className="ProjectTile">
          <img src="images/projects/unitycg.jpg" />
          <h3>
            UnityCG <span>/ Computer graphics course in Unity</span>
          </h3>
        </div>
        <div className="ProjectTile">
          <img src="images/projects/herbtree.jpg" />
          <h3>
            HerbTree <span>/ Interactive botanic visualization</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
