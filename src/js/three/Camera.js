import * as THREE from 'three'
import Experience from "./Experience"

export default class Camera {
  constructor() {
    this.experience = new Experience()
    this.sizes = this.experience.sizes
    this.scene = this.experience.scene
    this.canvas = this.experience.canvas

    this.setInstance()
  }

  setInstance() {
    this.instance = new THREE.PerspectiveCamera(25, this.sizes.width / this.sizes.height, 0.2, 50)
    this.instance.position.z = 6;
    this.scene.add(this.instance)
  }

  resize() {
    this.instance.aspect = this.sizes.width / this.sizes.height
    this.instance.updateProjectionMatrix()
  }

  update() {
    
  }
}