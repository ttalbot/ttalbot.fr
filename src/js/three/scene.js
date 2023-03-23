import * as THREE from 'three'
import { gsap, ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

var scene = new THREE.Scene()
scene.background = new THREE.Color(0x212529);;



ScrollTrigger.create({
  trigger: ".t2",
  start: "top bottom",
  end: "center center",
  scrub: true,
  onUpdate: self => {
    scene.background.setRGB(self.progress.toFixed(2), 0, 0)
  }
})

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( {color: 0x87BCDE} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

ScrollTrigger.create({
  trigger: ".t2",
  start: "top bottom",
  end: "center center",
  scrub: true,
  onUpdate: self => {
    cube.rotateY(.01 * self.progress.toFixed(2))
  }
})

export { scene };
