import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);

// materiał kostki (zielony)
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, cubeMaterial);

// zrobienie materiału czarnych krawędzi
const edges = new THREE.EdgesGeometry(geometry);
const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 20 });
const wireframe = new THREE.LineSegments(edges, lineMaterial);

// połączenie kostki i krawędzi w grupę
const CubeGroup = new THREE.Group();
CubeGroup.add(cube);
CubeGroup.add(wireframe);

// dodanie grupy do sceny
scene.add(CubeGroup);

// ustawienie kamery
camera.position.z = 5;

// funkcja animacji kostki (obrót)
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  CubeGroup.rotation.x += 0.01;
  CubeGroup.rotation.y += 0.01;


}

animate();
