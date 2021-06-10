import React from "react";
import { Link } from "react-router-dom";

import "./ProjectSection.scss";

const projectData = [
  {
    slug: "muser",
    name: "Muser",
    subtitle: "Smart music visualizer",
  },
  {
    slug: "animations",
    name: "Motion",
    subtitle: "2D & 3D animations",
  },
  {
    slug: "unitycg",
    name: "UnityCG",
    subtitle: "Teaching Computer Graphics",
  },
  {
    slug: "herbtree",
    name: "HerbTree",
    subtitle: "Interactive botanic visualization",
  },
];

const ProjectSection = (props) => {
  return (
    <div className="ProjectSection section">
      <h2>Projects</h2>
      <div className="projectTiles">
        {projectData.map((project) => (
          <Link
            to={`/project/${project.slug}`}
            className="ProjectTile"
            key={project.slug}
          >
            <img src={`images/projects/${project.slug}.jpg`} alt="" />
            <h3>
              {project.name}
              <span> / {project.subtitle}</span>
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
