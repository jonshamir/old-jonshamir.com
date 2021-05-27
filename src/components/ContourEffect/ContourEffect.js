import React from "react";
import * as THREE from "three";
import "./ContourEffect.scss";

import vertexShader from "./shader.vert";
import fragmentShader from "./contours.frag";

let container;
let camera, scene, renderer;
let uniforms;
const PIXEL_RATIO = 1; //window.devicePixelRatio || 1;

class ContourEffect extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    this.initScene();
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("scroll", this.handleScroll);
  }

  initScene() {
    container = this.canvasRef.current;

    camera = new THREE.Camera();
    camera.position.z = 1;

    scene = new THREE.Scene();

    var geometry = new THREE.PlaneBufferGeometry(2, 2);

    uniforms = {
      u_time: { type: "f", value: 1.0 },
      u_pixel_ratio: { type: "f", value: PIXEL_RATIO },
      u_resolution: { type: "v2", value: new THREE.Vector2() },
      u_mouse: { type: "v2", value: new THREE.Vector2() },
      u_scroll: { type: "f", value: 0 },
    };

    var material = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      extensions: {
        derivatives: true,
      },
    });

    var mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    renderer = new THREE.WebGLRenderer();
    // renderer.setPixelRatio(window.devicePixelRatio);

    container.appendChild(renderer.domElement);

    document.onmousemove = function (e) {
      uniforms.u_mouse.value.x = e.pageX;
      uniforms.u_mouse.value.y = e.pageY;
    };

    var animate = function () {
      requestAnimationFrame(animate);
      uniforms.u_time.value += 0.03;
      renderer.render(scene, camera);
    };
    animate();
  }

  handleResize(e) {
    renderer.setSize(window.innerWidth, window.innerHeight);
    uniforms.u_resolution.value.x = window.innerWidth;
    uniforms.u_resolution.value.y = window.innerHeight;
  }

  handleScroll() {
    const currScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    uniforms.u_scroll.value = currScroll / 1000;
  }

  render() {
    const { shouldDisplay } = this.props;
    return (
      <div
        className={shouldDisplay ? "ContourEffect" : "ContourEffect hidden"}
        ref={this.canvasRef}
      ></div>
    );
  }
}

export default ContourEffect;
