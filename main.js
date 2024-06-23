import { color } from "three/examples/jsm/nodes/Nodes.js";
import "./style.css";
import * as THREE from "three";

const canvas = document.querySelector("canvas.webgl");

// make Scene
const scene = new THREE.Scene();

// create mesh that contain Geometry & Material

// make Geometry
const geometry = new THREE.TorusGeometry(0.3, 0.2, 32, 64);
// make Material
const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });

// Now we need to ADD (Geometry & Material) to MESH
const knotMesh = new THREE.Mesh(geometry, material);

// And then we need to add Mesh to Scene
scene.add(knotMesh);

// Also need to add CAMERA
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
//  Camera add to SCENE
scene.add(camera);
camera.position.x = 1;
camera.position.y = 1;
camera.position.z = 10;

// Render for canvas
const renderer = new THREE.WebGLRenderer({ canvas: canvas });

// also need to define size for (renderer)
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

// Animation loop function
const animate = () => {
  // Request next frame
  requestAnimationFrame(animate);

  // Update objects (e.g., rotate mesh)
  knotMesh.rotation.x += 0.01;
  knotMesh.rotation.y += 0.01;

  // Render scene
  renderer.render(scene, camera);
};

// Start animation
animate();
