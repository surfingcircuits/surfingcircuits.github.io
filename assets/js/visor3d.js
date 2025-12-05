// visor3d.js - versión de diagnóstico + robusta
(function () {
  console.log("visor3d.js: iniciando...");

  const container = document.getElementById("viewer");
  if (!container) {
    console.error("visor3d.js: no existe #viewer en la página");
    return;
  }

  const modelUrl = container.dataset.model;
  console.log("visor3d.js: modelUrl =", modelUrl);

  // Check básico: fetch para ver si existe el archivo
  fetch(modelUrl, { method: 'HEAD' })
    .then(resp => {
      console.log("visor3d.js: HEAD status", resp.status, resp.ok);
      if (!resp.ok) {
        throw new Error("Modelo no encontrado en " + modelUrl + " (status " + resp.status + ")");
      }
      return resp;
    })
    .catch(err => {
      console.error("visor3d.js: error comprobando modelo:", err);
      container.innerText = "Error: no se encuentra el modelo. Revisa la ruta en data-model.";
      throw err;
    })
    .then(() => startViewer(modelUrl))
    .catch(() => {/* ya hemos informado */});

  function startViewer(url) {
    console.log("visor3d.js: arrancando viewer con", url);

    // Scene, camera, renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf5f5f5);

    const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.01, 20000);
    camera.position.set(2, 2, 4);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.physicallyCorrectLights = true;

    // Asegura que no metamos el canvas dos veces
    const existingCanvas = container.querySelector("canvas");
    if (existingCanvas) existingCanvas.remove();
    container.appendChild(renderer.domElement);

    // Lights
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.2);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.0);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);

    // Controls
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // Loader con más logs
    const loader = new THREE.GLTFLoader();
    console.log("visor3d.js: cargando GLTF con GLTFLoader...");
    loader.load(
      url,
      function (gltf) {
        console.log("visor3d.js: GLTF cargado:", gltf);
        if (!gltf.scene) {
          console.error("visor3d.js: gltf.scene vacío");
          container.innerText = "Error: el fichero GLTF no contiene escena (gltf.scene vacío).";
          return;
        }

        const model = gltf.scene;
        scene.add(model);

        // Auto-centro y escala si hace falta
        const box = new THREE.Box3().setFromObject(model);
        if (box.isEmpty()) {
          console.warn("visor3d.js: bounding box vacía -> probable ausencia de geometría");
          container.innerText = "El modelo parece no contener geometría (bounding box vacía).";
        }

        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center); // centra el modelo en origen

        // Ajuste automático del zoom/distancia
        const size = box.getSize(new THREE.Vector3()).length();
        const fitOffset = 1.2;
        const fov = camera.fov * (Math.PI / 180);
        const dist = (size * fitOffset) / (2 * Math.tan(fov / 2));
        camera.position.set(dist, dist, dist);
        camera.near = Math.max(0.01, size / 1000);
        camera.far = Math.max(1000, size * 100);
        camera.updateProjectionMatrix();

        controls.target.set(0, 0, 0);
        controls.update();

        console.log("visor3d.js: modelo centrado; size =", size, "dist =", dist);
      },
      function (xhr) {
        // Progreso (xhr.loaded / xhr.total)
        if (xhr && xhr.total) {
          console.log("visor3d.js: progreso", ((xhr.loaded / xhr.total) * 100).toFixed(1) + "%");
        }
      },
      function (err) {
        console.error("visor3d.js: error cargando GLTF:", err);
        container.innerText = "Error cargando el modelo (ver consola).";
      }
    );

    // Animate
    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    // Responsive
    window.addEventListener("resize", () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    });
  }
})();
