import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from 'motion/react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import ProjectShowcase from './components/ProjectShowcase.jsx'
import ExperienceTimeline from './components/ExperienceTimeline.jsx'
import SkillsSection from './components/SkillsSection.jsx'
import AboutSection from './components/AboutSection.jsx'
import PrinciplesSection from './components/PrinciplesSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import Footer from './components/Footer.jsx'
import { projects } from './data/projects.js'

gsap.registerPlugin(ScrollTrigger)

function ScrollProgress() {
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) return undefined

    const progress = document.querySelector('.scroll-progress__bar')
    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const amount = scrollable > 0 ? window.scrollY / scrollable : 0
      gsap.to(progress, { scaleX: amount, duration: 0.16, overwrite: true, ease: 'power1.out' })
    }

    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [reduceMotion])

  return <div className="scroll-progress" aria-hidden="true"><span className="scroll-progress__bar" /></div>
}

function ScrollScenes() {
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) return undefined

    const media = gsap.matchMedia()
    media.add('(min-width: 761px) and (prefers-reduced-motion: no-preference)', () => {
      gsap.fromTo(
        '.experience-line__fill',
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.experience-list',
            start: 'top 68%',
            end: 'bottom 62%',
            scrub: 0.5,
          },
        },
      )

      gsap.utils.toArray('.project-visual__screen').forEach((screen) => {
        gsap.fromTo(
          screen,
          { y: 24 },
          {
            y: -24,
            ease: 'none',
            scrollTrigger: {
              trigger: screen,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.8,
            },
          },
        )
      })
    })

    return () => media.revert()
  }, [reduceMotion])

  return null
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <ScrollProgress />
      <ScrollScenes />
      <Navbar />
      <main id="main">
        <Hero />
        <ProjectShowcase projects={projects} />
        <ExperienceTimeline />
        <SkillsSection />
        <AboutSection />
        <PrinciplesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
