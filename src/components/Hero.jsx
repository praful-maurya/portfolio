import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'

const intro =
  "I'm Praful Maurya, a frontend engineer focused on building scalable web and mobile applications, reusable interfaces, and reliable user experiences."

export default function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="hero section-wrap" id="top" aria-labelledby="hero-title">
      <div className="hero__copy">
        <motion.p
          className="eyebrow"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <span className="eyebrow__dot" /> Frontend engineer <span className="eyebrow__slash">/</span> React &amp; React Native
        </motion.p>
        <motion.h1
          id="hero-title"
          initial={reduceMotion ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          Building digital experiences that work <em>beautifully.</em>
        </motion.h1>
        <motion.p
          className="hero__intro"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.34 }}
        >
          {intro}
        </motion.p>
        <motion.div
          className="hero__actions"
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.48 }}
        >
          <a className="button button--dark" href="#work">Explore my work <ArrowDown size={15} /></a>
          <a className="text-link" href="#contact">Let&apos;s talk <ArrowUpRight size={15} /></a>
        </motion.div>
        <motion.div
          className="hero__meta"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <span>3+ years experience</span>
          <span>React.js + React Native</span>
          <span><MapPin size={13} /> Mumbai, India</span>
        </motion.div>
      </div>
      <motion.div
        className="hero-art"
        initial={reduceMotion ? false : { opacity: 0, x: 22 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
        aria-label="Abstract field notes on frontend engineering"
      >
        <div className="hero-art__paper">
          <div className="hero-art__topline"><span>FIELD NOTES — 01</span><span>19°04&apos; N / 72°52&apos; E</span></div>
          <div className="hero-art__orbit" aria-hidden="true">
            <div className="orbit-ring orbit-ring--one" />
            <div className="orbit-ring orbit-ring--two" />
            <div className="orbit-core">PM</div>
            <span className="orbit-label orbit-label--web">WEB</span>
            <span className="orbit-label orbit-label--mobile">MOBILE</span>
            <span className="orbit-label orbit-label--systems">SYSTEMS</span>
          </div>
          <div className="hero-art__caption">
            <span>Thoughtful by design.<br />Reliable by default.</span>
            <span className="hero-art__index">01—04</span>
          </div>
        </div>
        <span className="hero-art__side-note">A PRACTICE IN PROGRESS</span>
      </motion.div>
      <div className="hero__bottom-rule"><span>Scroll to explore</span><span>Selected work, 2023—26</span></div>
    </section>
  )
}
