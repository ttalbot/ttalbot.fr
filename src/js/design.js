import { gsap, ScrollTrigger } from 'gsap/all'

const t2Anim = gsap.from('.t2', {
  rotation: 60,
  duration: 3
})

ScrollTrigger.create({
  trigger: '.t2',
  animation: t2Anim,
  start: 'top bottom',
  end: 'center center',
  scrub: true
})
