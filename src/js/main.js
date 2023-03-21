import { gsap, ScrollTrigger } from './scroll/config.js'

gsap.to(".loader-container", {
  duration: 1.2,
  delay: 2.5,
  ease: 'power2',
  '--circle-radius': '0%',
  onComplete: () => {
    document.body.classList.remove("noscroll")
  }
})

gsap.from(".shape", {
  scale: '-=1',
  transformOrigin: 'center center',
  ease: 'elastic',
  duration: 1.8,
  stagger: .2,
})

gsap.to('.cross', {
  rotation: '90',
  duration: 15,
  transformOrigin: 'center center',
  repeat: -1,
  ease: 'linear'
})

const t2Anim = gsap.from(".t2", {
  rotation: 60,
  duration: 3
})

const t3Anim = gsap.from(".t3", {
  rotation: 60,
  duration: 3
})

const t4Anim = gsap.from(".t4", {
  rotation: 60,
  duration: 3
})

ScrollTrigger.create({
  trigger: ".t2",
  animation: t2Anim,
  start: "top bottom",
  end: "center center",
  scrub: true
})

ScrollTrigger.create({
  trigger: ".t3",
  animation: t3Anim,
  start: "top bottom",
  end: "center center",
  scrub: true
})

ScrollTrigger.create({
  trigger: ".t4",
  animation: t4Anim,
  start: "top bottom",
  end: "center center",
  scrub: true
})