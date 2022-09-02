/* import * as THREE from 'three';
import gui from 'dat.gui'; */

// const gui = new dat.GUI();

const loader = new THREE.GLTFLoader();
let ring;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, (window.innerWidth*1.1) / window.innerHeight, 0.1, 1000);
camera.position.z = 3;

const renderer = new THREE.WebGL1Renderer({
    canvas: document.getElementById('canvas'),
    alpha: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
// setPixelRatio() убирает возможное размытие модели на выходе
renderer.setPixelRatio(window.devicePixelRatio);

loader.load('model/scene.gltf', (gltf) => {
    scene.add(gltf.scene);
    ring = gltf.scene.children[0];
    ring.position.set(2, -0.5, -1);
    ring.rotation.x = -1.6;

    /* const mesh = gui.addFolder('object');
    mesh.add(ring.rotation, 'x').min(-5).max(5).step(0.1);
    mesh.add(ring.rotation, 'y').min(-5).max(5).step(0.1);
    mesh.add(ring.rotation, 'z').min(-5).max(5).step(0.1); */

    animate();
});

const ambientLight = new THREE.AmbientLight(0xFF8C00, 4);
scene.add(ambientLight);

/* const ambientFolder = gui.addFolder('ambient');
const ambientObj = {
    color: 0xffaf71
}
ambientFolder.addColor(ambientObj, 'color').onChange(() => {
    ambientLight.color.set(ambientObj.color);
}); */

const pointLight1 = new THREE.PointLight(0xDAA520, 6);
pointLight1.position.set(2, 3, 3);
scene.add(pointLight1);

/* const lightProps1 = gui.addFolder('light1');
lightProps1.add(pointLight1.position, 'x').min(-10).max(10).step(0.1);
lightProps1.add(pointLight1.position, 'y').min(-10).max(10).step(0.1);
lightProps1.add(pointLight1.position, 'z').min(-10).max(10).step(0.1);
lightProps1.add(pointLight1, 'intensity').min(0).max(10).step(0.1);

const colorObj1 = {
    color: 0xDAA520, 
}
lightProps1.addColor(colorObj1, 'color').onChange(() => {
    pointLight1.color.set(colorObj1.color);
}) */

const pointLight2 = new THREE.PointLight(0xFF8C00, 4);
pointLight2.position.set(-3, 0, 0.5);
scene.add(pointLight2);

/* const lightProps2 = gui.addFolder('light2');
lightProps2.add(pointLight2.position, 'x').min(-10).max(10).step(0.1);
lightProps2.add(pointLight2.position, 'y').min(-10).max(10).step(0.1);
lightProps2.add(pointLight2.position, 'z').min(-10).max(10).step(0.1);
lightProps2.add(pointLight2, 'intensity').min(0).max(10).step(0.1);

const colorObj2 = {
    color: 0xFF8C00,
}
lightProps2.addColor(colorObj2, 'color').onChange(() => {
    pointLight2.color.set(colorObj2.color);
}) */

const pointLight3 = new THREE.PointLight(0xDAA520, 2);
pointLight3.position.set(0, -4, 0);
scene.add(pointLight3);

/* const lightProps3 = gui.addFolder('light3');
lightProps3.add(pointLight3.position, 'x').min(-10).max(10).step(0.1);
lightProps3.add(pointLight3.position, 'y').min(-10).max(10).step(0.1);
lightProps3.add(pointLight3.position, 'z').min(-10).max(10).step(0.1);
lightProps3.add(pointLight3, 'intensity').min(0).max(10).step(0.1);

const colorObj3 = {
    color: 0xDAA520,
}
lightProps3.addColor(colorObj3, 'color').onChange(() => {
    pointLight3.color.set(colorObj3.color);
}) */

let mouseX = 0;
let mouseY = 0;

window.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
})

window.addEventListener('touchmove', (event) => {
    mouseX = event.touches[0].clientX;
    mouseY = event.touches[0].clientY;
})

function animate(){
    // ring.rotation.z += 0.02;
    ring.rotation.x = -1.55 + mouseY * 0.015;
    ring.rotation.z = mouseX * 0.015;
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

window.onresize = () => {
    camera.aspect = (window.innerWidth*1.1) / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}