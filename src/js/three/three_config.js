import * as THREE from 'three'
import { scene } from './scene'

const canvas = document.querySelector('.webgl')

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
var mouse = new THREE.Vector2()

var camera = new THREE.PerspectiveCamera( 25, sizes.width / sizes.height, 0.2, 50)
camera.position.z = 6;

window.addEventListener('resize', () =>
{
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )
document.addEventListener('mousemove', onDocumentMouseMove, false)

function onDocumentMouseMove(event) {
  event.preventDefault();
  mouse.x = (event.clientX / sizes.width) * 2 - 1;
  mouse.y = -(event.clientY / sizes.height) * 2 + 1;
}

const clock = new THREE.Clock()

const tick = () =>
{
  const elapsedTime = clock.getElapsedTime()

  renderer.render(scene, camera)

  window.requestAnimationFrame(tick)
}

tick()
