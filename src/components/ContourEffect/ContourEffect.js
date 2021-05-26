import React from "react";
import * as THREE from "three";
import "./ContourEffect.scss";

const vertexShader = require("shader.vert");
const fragmentShader = require("contours.frag");

console.log(THREE);

class ContourEffect extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    this.initScene();
    this.setCanvasSize();

    window.addEventListener("resize", (e) => this.handleResize(e));
  }

  initScene() {
    container = this.canvasRef;

    camera = new THREE.Camera();
    camera.position.z = 1;

    scene = new THREE.Scene();

    var geometry = new THREE.PlaneBufferGeometry(2, 2);

    uniforms = {
      u_time: { type: "f", value: 1.0 },
      u_pixel_ratio: { type: "f", value: PIXEL_RATIO },
      u_resolution: { type: "v2", value: new THREE.Vector2() },
      u_mouse: { type: "v2", value: new THREE.Vector2() },
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
    renderer.setPixelRatio(window.devicePixelRatio);

    container.appendChild(renderer.domElement);

    onWindowResize();
    window.addEventListener("resize", onWindowResize, false);

    document.onmousemove = function (e) {
      uniforms.u_mouse.value.x = e.pageX;
      uniforms.u_mouse.value.y = e.pageY;
    };
  }

  handleResize(e) {
    renderer.setSize(window.innerWidth, window.innerHeight);
    uniforms.u_resolution.value.x = window.innerWidth;
    uniforms.u_resolution.value.y = window.innerHeight;
  }

  setCanvasSize() {
    const w = document.documentElement.clientWidth;
    const h = Math.min(document.documentElement.clientHeight, 750);
    // updateGraphSize(w, h);
  }

  render() {
    return (
      <div className="ContourEffect" ref={this.canvasRef}>
        <div>Hello</div>
      </div>
    );
  }
}

function animate() {
  requestAnimationFrame(animate);
  render();
}

function render() {
  uniforms.u_time.value += 0.05;
  renderer.render(scene, camera);
}
export default ContourEffect;
