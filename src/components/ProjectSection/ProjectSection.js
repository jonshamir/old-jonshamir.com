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
            <Image
              src={`images/projects/${project.slug}.jpg`}
              alt={project.name}
            />
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
