import { gsap, ScrollTrigger } from 'gsap/all'

const t3Anim = gsap.from('.t3', {
  rotation: 60,
  duration: 3
})

ScrollTrigger.create({
  trigger: '.t3',
  animation: t3Anim,
  start: 'top bottom',
  end: 'center center',
  scrub: true
})
