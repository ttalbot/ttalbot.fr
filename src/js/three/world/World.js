import * as THREE from 'three'
import Experience from "../Experience";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default class World {
  constructor() {
    this.experience = new Experience()
    this.scene = this.experience.scene
    var color = new THREE.Color(0x212529)
    this.scene.background = color

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

    // CUBE CREATION
    // const geometry = new THREE.BoxGeometry( 1, 1, 1 )
    // const material = new THREE.MeshBasicMaterial( {color: 0x87BCDE} )
    // const cube = new THREE.Mesh( geometry, material )
    // material.wireframe = true
    // scene.add( cube )

    // SPHERE CREATION
    // const sphereGeometry = new THREE.SphereGeometry( .5, 16, 16 )
    // const sphereMaterial = new THREE.MeshBasicMaterial( {color: 0x87BCDE} )
    // const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial )
    // sphereMaterial.wireframe = true
    // scene.add( sphere )

    // TRIANGLE CREATION
    // const triangleGeometry = new THREE.ConeGeometry( .5, 1, 4 )
    // const triangleMaterial = new THREE.MeshBasicMaterial( {color: 0x87BCDE} )
    // const triangle = new THREE.Mesh( triangleGeometry, triangleMaterial )
    // triangleMaterial.wireframe = true
    // scene.add( triangle )

    const crossGeometry1 = new THREE.BoxGeometry( 1, .2, .2 )
    const crossGeometry2 = new THREE.BoxGeometry( 1, .2, .2 )
    const crossMaterial = new THREE.MeshNormalMaterial()
    const bar1 = new THREE.Mesh( crossGeometry1, crossMaterial )
    const bar2 = new THREE.Mesh( crossGeometry2, crossMaterial )
    bar2.rotateZ(1.57)
    const cross = new THREE.Group();
    cross.add( bar1 );
    cross.add( bar2 );
    this.scene.add( cross );

    var rotateCube = gsap.fromTo(cross.rotation, {
      x: 0,
      y: 0
    }, {
      y: Math.PI,
      x: Math.PI,
      ease: 'power2.inOut'
    })
    
    ScrollTrigger.create({
      trigger: ".t2",
      start: "top bottom",
      end: "center center",
      scrub: true,
      animation: rotateCube
    })
  }

  update() {

  }
}