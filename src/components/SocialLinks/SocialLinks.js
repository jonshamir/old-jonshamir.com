import React from "react";

import "./SocialLinks.scss";

const SocialLinks = (props) => {
  return (
    <div className="SocialLinks">
      <a
        key="instagram"
        href="https://www.instagram.com/yonshamir/"
        target="_blank"
        rel="noreferrer"
      >
        <span>Instagram</span>
        <img src="./assets/ui/instagram.svg" alt="" />
      </a>
      <a
        key="github"
        href="https://github.com/jonshamir"
        target="_blank"
        rel="noreferrer"
      >
        <span>GitHub</span>
        <img src="./assets/ui/github.svg" alt="" />
      </a>
      <a
        key="linkedin"
        href="https://www.linkedin.com/in/jonshamir/"
        target="_blank"
        rel="noreferrer"
      >
        <span>LinkedIn</span>
        <img src="./assets/ui/linkedin.svg" alt="" />
      </a>
      <a key="resume" href="resume.pdf" target="_blank" rel="noreferrer">
        <span>Resume</span>
        <img src="./assets/ui/resume.svg" alt="" />
      </a>
    </div>
  );
};

export default SocialLinks;
