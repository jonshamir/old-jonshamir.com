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
        <img src="images/instagram.svg" alt="" />
        <span>Instagram</span>
      </a>
      <a
        key="github"
        href="https://github.com/jonshamir"
        target="_blank"
        rel="noreferrer"
      >
        <img src="images/github.svg" alt="" />
        <span>GitHub</span>
      </a>
      <a
        key="resume"
        href="https://google.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img src="images/resume.svg" alt="" />
        <span>Resume</span>
      </a>
    </div>
  );
};

export default SocialLinks;
