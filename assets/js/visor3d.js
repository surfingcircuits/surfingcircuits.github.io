const container = document.getElementById("viewer");

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf5f5f5);

const camera = new THREE.PerspectiveCamera(
  60,
  container.clientWidth / container.clientHeight,
  0.1,
  2000
);
camera.position.set(2, 2, 4);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.2);
scene.add(hemiLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 1.0);
dirLight.position.set(5, 10, 7);
scene.add(dirLight);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

const loader = new THREE.GLTFLoader();
loader.load(
  "/assets/3Dmodels/RE-260RA_DC_motor.gltf",
  function (gltf) {
    const model = gltf.scene;
    scene.add(model);

    const box = new THREE.Box3().setFromObject(model);
    const center = box.getCenter(new THREE.Vector3());
    model.position.sub(center);

    const size = box.getSize(new THREE.Vector3()).length();
    const dist = size / (2 * Math.atan((Math.PI * camera.fov) / 360));
    camera.position.set(dist, dist, dist);

    controls.target.set(0, 0, 0);
  },
  undefined,
  function (error) {
    console.error("Error cargando el modelo:", error);
  }
);

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();

window.addEventListener("resize", () => {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
});
