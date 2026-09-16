import * as THREE from "three";

export const CAMERA_VIEWS = {
  overview: {
    position: new THREE.Vector3(-0.5, 1.75, 1.0),
    lookAt: new THREE.Vector3(0, 0, 0),
  },
  dice: {
    position: new THREE.Vector3(-0.45, 0.2, 0.19),
    lookAt: new THREE.Vector3(-0.13, -0.07, -0.12),
  },
  doublingCube: {
    position: new THREE.Vector3(-0.67, 0.25, 0.09),
    lookAt: new THREE.Vector3(-0.46, -0.25, -0.18),
  },
  Inlay: {
    position: new THREE.Vector3(-0.5, 0.27, 0.54),
    lookAt: new THREE.Vector3(-0.23, -0.24, -0.11),
  },
  boardBody: {
    position: new THREE.Vector3(-0.83, 0.28, 0.91),
    lookAt: new THREE.Vector3(0.0, -0.07, -0.04),
  },
  checkers: {
    position: new THREE.Vector3(-0.08, 0.24, -0.55),
    lookAt: new THREE.Vector3(-0.49, -0.21, -0.11),
  },
  hinges: {
    position: new THREE.Vector3(0.09, 0.23, 0.41),
    lookAt: new THREE.Vector3(-0.23, -0.22, -0.26),
  },
};
