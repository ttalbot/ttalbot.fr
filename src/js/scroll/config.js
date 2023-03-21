import { gsap, ScrollTrigger } from 'gsap/all'
import Lenis from '@studio-freight/lenis'

const lenis = new Lenis()
gsap.registerPlugin(ScrollTrigger)

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

export { gsap, ScrollTrigger };