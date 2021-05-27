import React from "react";

import "./SocialLinks.scss";

const SocialLinks = (props) => {
  return (
    <ul className="SocialLinks">
      <li key="instagram">
        <img src="images/instagram.svg" alt="" />
        <span>Instagram</span>
      </li>
      <li key="github">
        <img src="images/github.svg" alt="" />
        <span>GitHub</span>
      </li>
      <li key="resume">
        <img src="images/resume.svg" alt="" />
        <span>Resume</span>
      </li>
    </ul>
  );
};

export default SocialLinks;
