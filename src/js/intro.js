import { gsap } from 'gsap/all'

var intro = gsap.timeline({delay: 2.5});

intro.to('.intro-logo', {
  classList: 'intro-logo',
  scale: '3',
  duration: 1.3,
  ease: 'power2'
}).to('.loader-container', {
  duration: 1.2,
  ease: 'power2',
  '--circle-radius': '0%',
  onComplete: () => {
    document.body.classList.remove('noscroll')
  }
}, '<').from('.shape', {
  scale: '.2',
  transformOrigin: 'center center',
  ease: 'elastic',
  duration: 1.8,
  stagger: .2,
}, '<').to('.cross', {
  rotation: '90',
  duration: 15,
  transformOrigin: 'center center',
  repeat: -1,
  ease: 'linear'
}, '<')
