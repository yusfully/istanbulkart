import React, {
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
  Fragment,
} from "react";
import { useFabric } from "./useFabric";
import { getBounds } from "./utils";
import * as THREE from "three";

const Card = forwardRef(
  ({ height, width, left, top, progress, delta, template }, ref) => {
    useImperativeHandle(ref, () => ({
      turn() {},
      delete() {},
      zoom() {},
    }));
    const sceneDom = useRef();
    const canvasref = useRef();
    const [size, setSize] = useState();

    const refi = useFabric((fabricCanvas) => {
      canvasref.current = fabricCanvas;
    });

    useEffect(() => {
      getBounds(left, top);
    }, [left, top]);

    useEffect(() => {
      var scene = new THREE.Scene();
      const fov = (180 * (2 * Math.atan(375 / 2 / 800))) / Math.PI;
      var camera = new THREE.PerspectiveCamera(fov, 375 / 150, 1, 10000);
      camera.position.set(0, 0, 800);
      var renderer = new THREE.WebGLRenderer();

      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
      });
      renderer.setSize(375, 150);

      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setClearColor(0x000000, 0);
      sceneDom.current.appendChild(renderer.domElement);

      let textureFront = new THREE.CanvasTexture(
        canvasref.current.lowerCanvasEl
      );
      textureFront.needsUpdate = true;
      var radius = 50;

      var geometry = new THREE.BoxGeometry(width, height, 2, 30, 50, radius);
      var material = new THREE.MeshPhongMaterial({
        map: textureFront,
        specular: 0x050505,
        shininess: 100,
      });
      textureFront.anisotropy = renderer.capabilities.getMaxAnisotropy();

      let v1 = new THREE.Vector3();
      let w1 = (width - radius * 2) * 0.5,
        h1 = (height - radius * 2) * 0.5;
      let vTemp = new THREE.Vector3(),
        vSign = new THREE.Vector3(),
        vRad = new THREE.Vector3();
      geometry.vertices.forEach((v) => {
        v1.set(w1, h1, v.z);
        vTemp.multiplyVectors(v1, vSign.set(Math.sign(v.x), Math.sign(v.y), 1));
        vRad.subVectors(v, vTemp);
        if (
          Math.abs(v.x) > v1.x &&
          Math.abs(v.y) > v1.y &&
          vRad.length() > radius
        ) {
          vRad.setLength(radius).add(vTemp);
          v.copy(vRad);
        }
      });

      let pointLight = new THREE.PointLight(0xffffff, 10);
      pointLight.position.set(10, 300, 300);
      pointLight.castShadow = true;
      scene.add(pointLight);

      var rectEl = new THREE.Mesh(geometry, material);
      scene.add(rectEl);
      rectEl.position.x = 0;
      rectEl.position.y = 0;
      rectEl.position.z = 0;

      var animate = function () {
        requestAnimationFrame(animate);

        renderer.render(scene, camera);
      };
      animate();

      setSize(375, height);
    }, []);
    return (
      <Fragment>
        <div>
          <canvas ref={refi} width="220" height="150"></canvas>
        </div>
        <div ref={sceneDom} className=""></div>
      </Fragment>
    );
  }
);

export default Card;
