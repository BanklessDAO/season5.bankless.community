console.clear();
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.120.0/build/three.module.js";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.120.0/examples/jsm/controls/OrbitControls.js";
import { EffectComposer } from "https://cdn.jsdelivr.net/npm/three@0.120.0/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "https://cdn.jsdelivr.net/npm/three@0.120.0/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "https://cdn.jsdelivr.net/npm/three@0.120.0/examples/jsm/postprocessing/ShaderPass.js";
import { UnrealBloomPass } from "https://cdn.jsdelivr.net/npm/three@0.120.0/examples/jsm/postprocessing/UnrealBloomPass.js";

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(
  60,
  innerWidth / innerHeight,
  0.1,
  100
);
camera.position.set(Math.PI / 2, 500, 0).setLength(6);
let renderer = new THREE.WebGLRenderer({ antialias: false });
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
//renderer.setClearColor(0x224488);
renderer.outputEncoding = THREE.sRGBEncoding;
// document.body.appendChild(renderer.domElement);
document.getElementById("section-2").appendChild(renderer.domElement);

let controls = new OrbitControls(camera, renderer.domElement);

let light = new THREE.DirectionalLight(0xffffff, 1.5);
light.position.set(100, 50, 50);
light.castShadow = true;
light.shadow.mapSize.width = 2048;
light.shadow.mapSize.height = 2048;
light.shadow.camera.near = 0.5;
light.shadow.camera.far = 250;

let camSize = 10;
light.shadow.camera.left = -camSize;
light.shadow.camera.bottom = -camSize;
light.shadow.camera.right = camSize;
light.shadow.camera.top = camSize;

scene.add(light);
scene.add(new THREE.AmbientLight(0xffffff, 0.5));

let g = new THREE.CylinderBufferGeometry(0.5, 0.5, 0.1, 6);
g.rotateX(Math.PI * 0.5);
var folder = '/projects/'
var material = [
  new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(folder + 'bankless-logo.png') }),
  new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(folder + 'BANKLESS-POAP.png') }),
  new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(folder + 'BA.png') }),
  new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(folder + 'DAO Dash Logo.jpg') }),
  new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(folder + 'BanklessDAO Christmas.png') }),
  new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(folder + 'BED Index Constellation Apparel.jpeg') }),
  new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(folder + 'BAnkless_20Africa_20ContinentLARGE_20-_20Medium.jpg') }),
  new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(folder + 'Bankless Balancer Pool.jpeg') }),
  new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(folder + 'Bankless Academy MVP POAP.PNG') }),
  new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(folder + 'Bankless Academy.png') }),
  new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(folder + 'Bankless Consulting.png') }),
  new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(folder + 'Bankless WGMI Apparel.jpeg') }),
  new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(folder + 'BanklessBEDPickle Finance.jpeg') }),
  new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(folder + 'BanklessDAO HumanDAO.png') }),
  new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(folder + 'Book_Club_Genesis_POAP_DAOlogo.png') }),
  new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(folder + 'Copper Launch AMA.jpeg') }),
  new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(folder + 'DAO Heat Epoch 0 Winners NFT - The Rise of The DAO.png') }),
  new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(folder + 'DAO Punks Hype POAP.PNG') }),
  new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(folder + 'DAOTown.png') }),
  new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(folder + 'Diamond Hands.jpeg') }),
  new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(folder + 'Fight_20Club_20POAP_20-_20Small.jpg') }),
  new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(folder + 'GMI Index Chart.png') }),
  new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(folder + 'GMN A16Z.png') }),
  new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(folder + 'GPe_Yoga.jpg') }),
  new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(folder + 'Good Morning News.png') }),
  new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(folder + 'Grant_20Call_203.png') }),
  new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(folder + 'Punk_27d_20DAOpunk_20by_20JENetics_20Creative_23276_20-_20Medium.jpg') }),
  new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(folder + 'RCD NFT Drop.png') }),
  new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(folder + 'Right Click Save Satoshis Mom.jpeg') }),
  new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(folder + 'Screenshot 2022-01-17 at 23.15.11.png') }),
  new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(folder + 'Shadowy_Supercoder.png') }),
  new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(folder + 'Social_20Media_20Banner_20V3_20-_20Medium.jpg') }),
  new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(folder + 'The Citadel.png') }),
  new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(folder + 'The Rug Vol 1.png') }),
  new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(folder + 'international_medianodes.png') }),
  new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(folder + 'smartmockups_kyd9x713.jpg') }),
  new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(folder + 'smartmockups_kyda1v8z.jpg') }),
  new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(folder + 'smartmockups_kyda4c39.jpg') }),
];
var loader = new THREE.TextureLoader();
var texture = loader.load('assets/images/BA.png');
let m = new THREE.MeshStandardMaterial({
  color: 0xFFFFFF,
  map: texture,
  roughness: 0.75,
  metalness: 0.25
});
let hexUniforms = {
  time: { value: 0 },
  globalBloom: { value: 0 }
};

material.forEach((m) => {

  m.onBeforeCompile = (shader) => {

    // shader.uniforms.textures = {
    //   'type': 'tv', value: [
    //     new THREE.TextureLoader().load('https://threejs.org/examples/textures/crate.gif'),
    //     new THREE.TextureLoader().load('https://threejs.org/examples/textures/equirectangular.png'),
    //     new THREE.TextureLoader().load('https://threejs.org/examples/textures/colors.png')
    //   ]
    // };
    shader.uniforms.time = hexUniforms.time;
    shader.uniforms.globalBloom = hexUniforms.globalBloom;
    console.log(shader.vertexShader);
    shader.vertexShader = `
    attribute vec3 instColor;
    attribute vec2 colorPhase;
    varying vec3 vPos;
    varying vec3 vInstColor;
    varying vec2 vColorPhase;
    ${shader.vertexShader}
  `.replace(
      `#include <fog_vertex>`,
      `#include <fog_vertex>
    vPos = vec3(transformed);
    vInstColor = vec3(instColor);
    vColorPhase = colorPhase;
  `
    );

    console.log(shader.fragmentShader);
    shader.fragmentShader = `
    uniform float time;
    uniform float globalBloom;
    varying vec3 vPos;
    varying vec3 vInstColor;
    varying vec2 vColorPhase;
    ${shader.fragmentShader}
  `.replace(
      `#include <dithering_fragment>`,
      `#include <dithering_fragment>
      
      gl_FragColor = globalBloom > 0.5 ? vec4(0, 0, 0, 1) : gl_FragColor;
  
      float t = sin(time * PI * vColorPhase.y + vColorPhase.x) * 0.5 + 0.5;
      vec3 c = mix(gl_FragColor.rgb, vInstColor, t);
  
      float a = smoothstep(0.015, 0.02 + (1. - t) * 0.03, abs(vPos.z));
      gl_FragColor.rgb = mix(c, gl_FragColor.rgb, a );
  `
    );
  };

  // m.onBeforeCompile = (shader) => {

  // shader.uniforms.textures = {
  //   'type': 'tv', value: [
  //     new THREE.TextureLoader().load('https://threejs.org/examples/textures/crate.gif'),
  //     new THREE.TextureLoader().load('https://threejs.org/examples/textures/equirectangular.png'),
  //     new THREE.TextureLoader().load('https://threejs.org/examples/textures/colors.png')
  //   ]
  // };


  // shader.vertexShader = shader.vertexShader.replace(
  //   '#define STANDARD',
  //   `#define STANDARD
  //         varying vec3 vTint;
  //         varying float vtextures;`
  // ).replace(
  //   '#include <common>',
  //   `#include <common>
  //     attribute vec3 tint;
  //     attribute float textures;`
  // ).replace(
  //   '#include <project_vertex>',
  //   `#include <project_vertex>
  //     vTint = tint;
  //     vtextures=textures;`
  // );


  // shader.fragmentShader = shader.fragmentShader.replace(
  //   '#define STANDARD',
  //   `#define STANDARD
  //         uniform sampler2D textures[3];
  //         varying vec3 vTint;
  //         varying float vtextures;`
  // )
  //   .replace(
  //     '#include <fog_fragment>',
  //     `#include <fog_fragment>
  //     float x = vtextures;
  //     vec4 col;
  //     col = texture2D(textures[0], vUv ) * step(-0.1, x) * step(x, 0.1);
  //     // col += texture2D(textures[1], vUv ) * step(0.9, x) * step(x, 1.1);
  //     // col += texture2D(textures[2], vUv ) * step(1.9, x) * step(x, 2.1);

  //     gl_FragColor = col;
  //     `

  //   )
  //   ;
  //   console.log(shader.vertexShader);
  // }
});

let circleCount = 3;
let instCount = ((circleCount * (circleCount + 1)) / 2) * 6 + 1;

let o = new THREE.InstancedMesh(g, material[2], instCount);
o.userData.phases = [];
o.castShadow = true;
o.receiveShadow = true;
o.rotation.x = Math.PI * 0.5;
o.updateMatrix();

// console.log(o)

let a = material.map((m, i) => {
  let d = new THREE.InstancedMesh(g, material[i+1], instCount);
  d.userData.phases = [];
  d.castShadow = true;
  d.receiveShadow = true;
  d.rotation.x = Math.PI * 0.5;
  d.updateMatrix();
  return d;
})

let d = new THREE.InstancedMesh(g, material[0], instCount);
d.userData.phases = [];
d.castShadow = true;
d.receiveShadow = true;
d.rotation.x = Math.PI * 0.5;
d.updateMatrix();

let colors = [
  new THREE.Color(0xffffff),
  new THREE.Color(0xff8888),
  new THREE.Color(0x88ff88),
  new THREE.Color(0x8888ff)
];
let instColor = [];
// let textures = [];

let colorPhase = [];
let dummy = new THREE.Object3D();

// hexagonal grid points ///////////////////////////////////////////////////////////////////////////
let unit = Math.sqrt(3) * 0.5 * 1.025;

let angle = Math.PI / 3;
let axis = new THREE.Vector3(0, 0, 1);

let axisVector = new THREE.Vector3(0, -unit, 0);
let sideVector = new THREE.Vector3(0, unit, 0).applyAxisAngle(axis, -angle);
let vec3 = new THREE.Vector3(); // temp vector
let counter = 0;
for (let seg = 0; seg < 6; seg++) {
  for (let ax = 1; ax <= circleCount; ax++) {
    for (let sd = 0; sd < ax; sd++) {

      vec3.copy(axisVector)
        .multiplyScalar(ax)
        .addScaledVector(sideVector, sd)
        .applyAxisAngle(axis, (angle * seg) + (Math.PI / 6));

      // let r = THREE.MathUtils.randInt(0, 2)
      // console.log('random', r)
      // o.material[2].opacity=0
      // o.material = material[r]
      // textures.push(r)
      // console.log(vec3)

      setHexData(a[counter], dummy, vec3, counter);

      counter++;
    }
  }
}
setHexData(d, dummy, new THREE.Vector3(), counter); // central hex
//////////////////////////////////////////////////////////////////////////////////////////////////

console.log('instColor', instColor)
// console.log('textures', textures)

g.setAttribute(
  "instColor",
  new THREE.InstancedBufferAttribute(new Float32Array(instColor), 3)
);
// g.setAttribute(
//   "textureIndex",
//   new THREE.InstancedBufferAttribute(new Float32Array(textures), 2)
// );
g.setAttribute(
  "colorPhase",
  new THREE.InstancedBufferAttribute(new Float32Array(colorPhase), 2)
);
//console.log(o);

scene.add(o);
scene.add(d);
scene.add(a[0]);

a.map((o) => {
  scene.add(o);
})

// bloom /////////////////////////////////////////////////////////////////////////////////////////
var renderScene = new RenderPass(scene, camera);
var bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  1.5,
  0.4,
  0.85
);
bloomPass.threshold = 0;
bloomPass.strength = 1.25;
bloomPass.radius = 0.125;

var bloomComposer = new EffectComposer(renderer);
bloomComposer.renderToScreen = false;
bloomComposer.addPass(renderScene);
bloomComposer.addPass(bloomPass);

var finalPass = new ShaderPass(
  new THREE.ShaderMaterial({
    uniforms: {
      baseTexture: { value: null },
      bloomTexture: { value: bloomComposer.renderTarget2.texture }
    },
    vertexShader: `
			varying vec2 vUv;
			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}
`,
    fragmentShader: `
			uniform sampler2D baseTexture;
			uniform sampler2D bloomTexture;
			varying vec2 vUv;
			void main() {
				gl_FragColor = ( texture2D( baseTexture, vUv ) + vec4( 1.0 ) * texture2D( bloomTexture, vUv ) );
			}
`,
    defines: {}
  }),
  "baseTexture"
);
finalPass.needsSwap = true;

// bokeh ////////////////////////////////////////////////////////////////////////////////////////
// var bokehPars = {
//   focus: 5,
//   aperture: 25,
//   maxblur: 0.01
// }
// var bokehPass = new BokehPass(scene, camera, {
//   focus: bokehPars.focus,
//   aperture: bokehPars.aperture * 0.0001,
//   maxblur: bokehPars.maxblur,

//   width: innerWidth,
//   height: innerHeight
// });
//////////////////////////////////////////////////////////////////////////////////////////////////

var finalComposer = new EffectComposer(renderer);
finalComposer.addPass(renderScene);
finalComposer.addPass(finalPass);
// finalComposer.addPass(bokehPass);

// GUI - Bokeh //////////////////////////////////////////////////////////////////////////////////
// var gui = new GUI();
// gui.close();
// var bok = gui.addFolder("Bokeh");
// bok.add(bokehPars, "focus", 0.1, 20., 0.1).onChange(setBokehPars);
// bok.add(bokehPars, "aperture", 0.0, 100.0, 0.1).onChange(setBokehPars);
// bok.add(bokehPars, "maxblur", 0, 0.1, 0.001).onChange(setBokehPars);
// function setBokehPars() {
//   bokehPass.uniforms.focus.value = bokehPars.focus;
//   bokehPass.uniforms.aperture.value = bokehPars.aperture * 0.0001;
//   bokehPass.uniforms.maxblur.value = bokehPars.maxblur;
// }
/////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////
window.onresize = function () {
  var width = window.innerWidth;
  var height = window.innerHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize(width, height);

  bloomComposer.setSize(width, height);
  finalComposer.setSize(width, height);
};
/////////////////////////////////////////////////////////////////////////////////////////////////


let clock = new THREE.Clock();
let mat4 = new THREE.Matrix4();

renderer.setAnimationLoop(() => {
  let t = clock.getElapsedTime();
  hexUniforms.time.value = t;

  o.userData.phases.forEach((ph, idx) => {
    o.getMatrixAt(idx, mat4);
    mat4.decompose(dummy.position, dummy.quaternion, dummy.scale);
    dummy.position.z = Math.sin(ph.phaseDepth + t * 0.5) * 0.125;
    dummy.rotation.set(
      Math.cos(ph.phaseX + t * Math.sign(ph.phaseX)) * Math.PI * 0.0625,
      Math.sin(ph.phaseY + t * Math.sign(ph.phaseY)) * Math.PI * 0.0625,
      0
    );
    dummy.updateMatrix();
    o.setMatrixAt(idx, dummy.matrix);
  });
  o.instanceMatrix.needsUpdate = true;

  // d.userData.phases.forEach((ph, idx) => {
  //   d.getMatrixAt(idx, mat4);
  //   mat4.decompose(dummy.position, dummy.quaternion, dummy.scale);
  //   dummy.position.z = Math.sin(ph.phaseDepth + t * 0.5) * 0.125;
  //   dummy.rotation.set(
  //     Math.cos(ph.phaseX + t * Math.sign(ph.phaseX)) * Math.PI * 0.0625,
  //     Math.sin(ph.phaseY + t * Math.sign(ph.phaseY)) * Math.PI * 0.0625,
  //     0
  //   );
  //   dummy.updateMatrix();
  //   d.setMatrixAt(idx, dummy.matrix);
  // });
  // d.instanceMatrix.needsUpdate = true;

  hexUniforms.globalBloom.value = 1;
  renderer.setClearColor(0x000000);
  bloomComposer.render();
  hexUniforms.globalBloom.value = 0;
  // renderer.setClearColor(0x220011);
  finalComposer.render();

  //renderer.render(scene, camera);
});

function setHexData(o, dummy, pos, idx) {

  dummy.position.copy(pos);
  dummy.updateMatrix();
  o.setMatrixAt(idx, dummy.matrix);

  let c = colors[THREE.MathUtils.randInt(0, 3)];
  instColor.push(c.r, c.g, c.b);

  colorPhase.push(Math.random() * Math.PI * 2, Math.random() * 0.5 + 1); // phase, speed

  o.userData.phases.push({
    phaseX: (Math.random() - 0.5) * Math.PI * 2,
    phaseY: (Math.random() - 0.5) * Math.PI * 2,
    phaseDepth: Math.random() * Math.PI * 2
  });

}
