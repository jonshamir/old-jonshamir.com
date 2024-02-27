import Common from "./Common";
import * as THREE from "three";

import Simulation from "./Simulation";
import face_vert from "./glsl/sim/face.vert";
import color_frag from "./glsl/sim/color.frag";
import grid_frag from "./glsl/sim/grid.frag";

export default class Output {
  constructor() {
    this.init();
  }

  init() {
    this.simulation = new Simulation();

    this.scene = new THREE.Scene();
    this.camera = new THREE.Camera();

    this.output = new THREE.Mesh(
      new THREE.PlaneBufferGeometry(2, 2),
      new THREE.RawShaderMaterial({
        transparent: true,
        vertexShader: face_vert,
        fragmentShader: grid_frag,
        extensions: {
          derivatives: true,
        },
        uniforms: {
          velocity: {
            value: this.simulation.fbos.vel_0.texture,
          },
          boundarySpace: {
            value: new THREE.Vector2(),
          },
          resolution: {
            value: new THREE.Vector2(Common.width, Common.height),
          },
        },
        // glslVersion: THREE.GLSL3,
      })
    );

    this.scene.add(this.output);
  }
  addScene(mesh) {
    this.scene.add(mesh);
  }

  resize() {
    this.output.material.uniforms.resolution.value.set(
      Common.width,
      Common.height
    );
    this.simulation.resize();
  }

  render() {
    Common.renderer.setRenderTarget(null);
    Common.renderer.render(this.scene, this.camera);
  }

  update() {
    this.simulation.update();
    this.render();
  }
}
