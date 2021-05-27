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
        <img src="/images/instagram.svg" alt="" />
      </a>
      <a
        key="github"
        href="https://github.com/jonshamir"
        target="_blank"
        rel="noreferrer"
      >
        <span>GitHub</span>
        <img src="/images/github.svg" alt="" />
      </a>
      <a
        key="resume"
        href="https://google.com/"
        target="_blank"
        rel="noreferrer"
      >
        <span>Resume</span>
        <img src="/images/resume.svg" alt="" />
      </a>
    </div>
  );
};

export default SocialLinks;
