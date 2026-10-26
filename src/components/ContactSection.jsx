import { useState } from 'react'
import { ArrowDownToLine, ArrowUpRight, Check, Copy, Mail, MapPin } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { profile } from '../data/profile.js'

export default function ContactSection() {
  const [copyState, setCopyState] = useState('idle')
  const reduceMotion = useReducedMotion()
  const socialLinks = [
    { label: 'LinkedIn', href: profile.linkedin },
    { label: 'GitHub', href: profile.github },
  ].filter((link) => link.href.trim())

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopyState('copied')
      window.setTimeout(() => setCopyState('idle'), 2200)
    } catch (error) {
      console.error('Unable to copy the email address.', error)
      setCopyState('error')
      window.setTimeout(() => setCopyState('idle'), 3500)
    }
  }

  return (
    <section className="contact-section section-pad" id="contact" aria-labelledby="contact-title">
      <div className="section-wrap">
        <motion.div
          className="contact-topline"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.55 }}
        >
          <p className="eyebrow eyebrow--light"><span className="eyebrow__dot" /> Open to meaningful work</p>
          <span>CONTACT / 2026</span>
        </motion.div>
        <motion.h2
          id="contact-title"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.7, delay: 0.08 }}
        >
          Have a product<br />worth <em>building?</em>
        </motion.h2>
        <div className="contact-bottom">
          <div className="contact-email">
            <a href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={19} /></a>
            <button type="button" onClick={copyEmail} aria-label="Copy email address">
              {copyState === 'copied' ? <Check size={15} /> : <Copy size={15} />}
              {copyState === 'copied' ? 'Copied' : 'Copy email'}
            </button>
            <span className="sr-only" role="status" aria-live="polite">
              {copyState === 'copied' ? 'Email address copied.' : copyState === 'error' ? 'Could not copy email. Use the email link instead.' : ''}
            </span>
          </div>
          <div className="contact-meta">
            <span><MapPin size={14} /> {profile.location}</span>
            <a href={profile.resume} download><ArrowDownToLine size={14} /> Download resume</a>
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer"><Mail size={14} /> {link.label}<ArrowUpRight size={12} /></a>
            ))}
          </div>
        </div>
        <div className="contact-stamp" aria-hidden="true">LET’S<br />MAKE<br /><span>IT WORK.</span></div>
      </div>
    </section>
  )
}
