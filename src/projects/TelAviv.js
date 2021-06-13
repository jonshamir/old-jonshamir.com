import React from "react";
import ProjectPage from "./ProjectPage";

import Image from "../components/Image/Image";

const TelAviv = (props) => {
  return (
    <ProjectPage>
      <div className="section">
        <h1>Tel Aviv</h1>
        <p className="subtitle">Watercolor studies of Tel Aviv</p>
        <br />
        <Image
          ratio="1.42"
          src="assets/projects/tel-aviv/watercolor3.jpg"
          alt="Tel Aviv 3"
          style={{ backgroundColor: "#eeeceb" }}
        />
        <br />
        <br />
        <br />
        <Image
          ratio="1.42"
          src="assets/projects/tel-aviv/watercolor2.jpg"
          alt="Tel Aviv 2"
          style={{ backgroundColor: "#eeeceb" }}
        />
        <br />
        <br />
        <br />
        <Image
          ratio="1.42"
          src="assets/projects/tel-aviv/watercolor1.jpg"
          alt="Tel Aviv 1"
          style={{ backgroundColor: "#eeeceb" }}
        />
        <br />
        <p>
          <br />
        </p>
      </div>
    </ProjectPage>
  );
};

export default TelAviv;
