import React from "react";
import ReactPlayer from "react-player";
import ProjectPage from "./ProjectPage";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const range = (n) => Array.from({ length: n }, (_, index) => index + 1);

const ProjectCG = (props) => {
  const slides = range(9).map((i) => {
    return (
      <div key={i}>
        <img src={`images/projects/unitycg/slide${i}.png`} alt="Slide ${i}" />
      </div>
    );
  });

  return (
    <ProjectPage>
      <div className="section">
        <div className="cubeEarth">
          <ReactPlayer
            url="images/projects/unitycg/cube.mp4"
            playing
            loop
            width="400px"
            height="400px"
          />
        </div>
        <h1>Unity CG</h1>
        <p className="subtitle">Teaching Computer Graphics in Unity3D</p>
        <p>
          In 2019 I was given the opportunity to rebuild the practical side of
          the Computer Graphics Course at HUJI from the ground up. The idea was
          to teach Computer Graphics in a more engaging way, using the real-time
          interactivity of Unity3D.
        </p>
        <p>
          Due to the COVID-19 pandemic which was just beginning, we understood
          that the campus will probably be closed. To improve the remote
          learning experience, I designed over 500 slides with custom
          illustrations & animations that visualize different concepts.
        </p>
        <br />

        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          emulateTouch
          infiniteLoop
          autoPlay
          renderArrowPrev={(clickHandler) => (
            <div onClick={clickHandler} className="CarouselArrow left">
              {"<"}
            </div>
          )}
          renderArrowNext={(clickHandler) => (
            <div onClick={clickHandler} className="CarouselArrow right">
              {">"}
            </div>
          )}
        >
          {slides}
        </Carousel>
        <span className="Caption">Some slides created for the course</span>
        <br />
        <br />
        <p>
          I also created 5 practical exercises, taught the students online and
          graded their assignments.
        </p>

        <ReactPlayer
          url="images/projects/unitycg/torus.mp4"
          playing
          loop
          width="400px"
          height="400px"
          style={{ float: "left" }}
        />
        <br />
        <br />
        <br />
        <h2>Tools Used</h2>
        <ul className="List">
          <li>Unity3D + C#</li>
          <li>HLSL (shading language)</li>
          <li>Adobe CC</li>
          <li>Google Slides</li>
        </ul>
      </div>
    </ProjectPage>
  );
};

export default ProjectCG;
