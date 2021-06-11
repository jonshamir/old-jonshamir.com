import React from "react";
import { Link } from "react-router-dom";
import Image from "../Image/Image";

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
    name: "Unity CG",
    subtitle: "Computer graphics course in Unity3D",
  },
  {
    slug: "herbtree",
    name: "Herb Tree",
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
            <Image
              src={`assets/projects/${project.slug}/cover.jpg`}
              alt={project.name}
            />
            <div className="info">
              <h3>{project.name}</h3>
              <h4>{project.subtitle}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
