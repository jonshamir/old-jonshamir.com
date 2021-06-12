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
        <img src={`assets/projects/unitycg/slide${i}.png`} alt="Slide" />
      </div>
    );
  });

  return (
    <ProjectPage>
      <div className="section">
        <div className="earth3d">
          <ReactPlayer
            url="assets/projects/unitycg/cube.mp4"
            config={{
              file: {
                attributes: {
                  poster: "assets/projects/unitycg/cube.jpg",
                  disableRemotePlayback: true,
                },
              },
            }}
            playing
            loop
            width="100%"
            attributes={{ disableRemotePlayback: true }}
          />
        </div>
        <h1>Unity CG</h1>
        <p className="subtitle">Teaching Computer Graphics in Unity</p>
        <p>
          In 2019 I was given the opportunity to rebuild the practical side of
          the Computer Graphics Course at{" "}
          <a href="https://en.huji.ac.il/" target="_blank" rel="noreferrer">
            the Hebrew University
          </a>{" "}
          from the ground up. The idea was to teach Computer Graphics in a more
          engaging way, using the real-time interactivity of the{" "}
          <a href="https://unity.com/" target="_blank" rel="noreferrer">
            Unity game engine
          </a>
          .
        </p>
        <p>
          Due to the emerging COVID-19 pandemic, the class had to be taught
          remotely. In an attempt to improve the learning experience for the
          students, I created 12 lectures with over 500 slides including custom
          illustrations & animations that visualize different concepts.
        </p>
        <div className="slideContainer">
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
          <span className="Caption">
            Some of the slides I created for the course
          </span>
        </div>
        <br />
        <p>
          I also created 5 coding exercises involving subjects such as
          Subdivision Surfaces, Ray-Tracing, Shading, Texturing and more. I
          taught the students remotely and graded their assignments.
        </p>

        <div className="earth3d torus">
          <ReactPlayer
            url="assets/projects/unitycg/torus.mp4"
            config={{
              file: {
                attributes: {
                  poster: "assets/projects/unitycg/torus.jpg",
                  disableRemotePlayback: true,
                },
              },
            }}
            playing
            loop
            width="100%"
          />
        </div>
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
