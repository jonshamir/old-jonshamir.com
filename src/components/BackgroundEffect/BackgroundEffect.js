import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useColorTheme } from "../DarkModeToggle/useColorTheme";
import "./BackgroundEffect.scss";

import vertexShader from "./shader.vert";
import fragmentShader from "./contours.frag";

let container;
let camera, scene, renderer;
let uniforms;

export const BackgroundEffect = (props) => {
  const { isDark } = useColorTheme();
  const canvasRef = useRef();
  const materialRef = useRef();
  const [didInit, setDidInit] = useState(false);

  useEffect(() => {
    if (!didInit) {
      initScene();
      window.addEventListener("resize", handleResize);
      handleResize();
      setDidInit(true);
    }
  }, [didInit, initScene]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function initScene() {
    container = canvasRef.current;

    camera = new THREE.OrthographicCamera();
    camera.position.z = 1;

    scene = new THREE.Scene();

    uniforms = {
      u_time: { type: "f", value: 1.0 },
      u_pixel_ratio: { type: "f", value: window.devicePixelRatio },
      u_resolution: { type: "v2", value: new THREE.Vector2() },
      u_mouse: { type: "v2", value: new THREE.Vector2() },
      u_theme: { type: "f", value: isDark ? 1 : 0 },
    };

    materialRef.current = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      extensions: {
        derivatives: true,
      },
      transparent: true,
    });

    var mesh = new THREE.Mesh(
      new THREE.PlaneBufferGeometry(2, 2),
      materialRef.current
    );
    scene.add(mesh);

    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);

    container.appendChild(renderer.domElement);

    document.onmousemove = (e) => {
      uniforms.u_mouse.value.x = (e.pageX / container.offsetWidth) * 2 - 1;
      uniforms.u_mouse.value.y = -(e.pageY / container.offsetHeight) * 2 + 1;

      console.log(uniforms.u_mouse.value.x, uniforms.u_mouse.value.y);
    };

    const animate = () => {
      requestAnimationFrame(animate);
      uniforms.u_time.value += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  }

  function handleResize() {
    const w = container.offsetWidth;
    const h = container.offsetHeight;
    renderer.setSize(w, h);
    uniforms.u_resolution.value = { x: w, y: h };
  }

  if (materialRef.current) {
    materialRef.current.uniforms.u_theme.value = isDark ? 1 : 0;
  }

  return <div className="BackgroundEffect" ref={canvasRef}></div>;
};

export default BackgroundEffect;
