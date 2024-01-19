import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useColorTheme } from "../DarkModeToggle/useColorTheme";
import "./ContourEffect.scss";

import vertexShader from "./shader.vert";
import fragmentShader from "./contours.frag";

let container;
let camera, scene, renderer;
let uniforms;
const PIXEL_RATIO = 1; //window.devicePixelRatio || 1;

export const ContourEffect = (props) => {
  const { shouldDisplay } = props;
  const { isDark, _ } = useColorTheme();
  const canvasRef = useRef();
  const materialRef = useRef();
  const [didInit, setDidInit] = useState(false);

  useEffect(() => {
    if (!didInit) {
      initScene();
      handleResize();
      window.addEventListener("resize", handleResize);
      window.addEventListener("scroll", handleScroll);
      setDidInit(true);
    }
  });

  function initScene() {
    container = canvasRef.current;

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
      u_theme: { type: "f", value: isDark ? 1 : 0 },
    };

    materialRef.current = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      extensions: {
        derivatives: true,
      },
    });

    var mesh = new THREE.Mesh(geometry, materialRef.current);
    scene.add(mesh);

    renderer = new THREE.WebGLRenderer();

    container.appendChild(renderer.domElement);

    document.onmousemove = function (e) {
      uniforms.u_mouse.value.x = e.pageX;
      uniforms.u_mouse.value.y = e.pageY;
    };

    const animate = () => {
      requestAnimationFrame(animate);
      if (props.shouldDisplay) {
        uniforms.u_time.value += 0.03;
        renderer.render(scene, camera);
      }
    };
    animate();
  }

  function handleResize() {
    const BORDER = 15 * 2 * 0;
    const w = window.innerWidth - BORDER;
    const h = 0.8 * window.innerHeight - BORDER;
    renderer.setSize(w, h);
    uniforms.u_resolution.value.x = w;
    uniforms.u_resolution.value.y = h;
  }

  function handleScroll() {
    const currScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    uniforms.u_scroll.value = currScroll / 1000;
  }

  if (materialRef.current) {
    console.log("isDark", isDark);
    materialRef.current.uniforms.u_theme.value = isDark ? 1 : 0;
  }

  return (
    <div
      className={shouldDisplay ? "ContourEffect" : "ContourEffect hidden"}
      ref={canvasRef}
    ></div>
  );
};

export default ContourEffect;
