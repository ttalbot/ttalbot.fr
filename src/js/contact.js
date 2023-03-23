import { gsap, ScrollTrigger } from 'gsap/all'

const t4Anim = gsap.from('.t4', {
  rotation: 60,
  duration: 3
})

ScrollTrigger.create({
  trigger: '.t4',
  animation: t4Anim,
  start: 'top bottom',
  end: 'center center',
  scrub: true
})
