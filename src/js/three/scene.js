import * as THREE from 'three'
import { gsap, ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

var scene = new THREE.Scene()
var color = new THREE.Color(0x212529)
scene.background = color

var bgColor = gsap.to(color, {
  r: .41,
  g: .3,
  b: .83 
})

ScrollTrigger.create({
  trigger: ".t2",
  start: "top bottom",
  end: "center center",
  scrub: true,
  animation: bgColor
})

const geometry = new THREE.BoxGeometry( 1, 1, 1 )
const material = new THREE.MeshBasicMaterial( {color: 0x87BCDE} )
const cube = new THREE.Mesh( geometry, material )
material.wireframe = true
// cube.position.x = -2;
// cube.position.z = -9;
scene.add( cube )

var rotateCube = gsap.to(cube.rotation, {
  y: Math.PI,
  ease: 'power2.inOut'
})

ScrollTrigger.create({
  trigger: ".t2",
  start: "top bottom",
  end: "center center",
  scrub: true,
  animation: rotateCube
})

export { scene }
