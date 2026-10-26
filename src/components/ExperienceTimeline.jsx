import { ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { experience } from '../data/experience.js'
import SectionHeading from './SectionHeading.jsx'

export default function ExperienceTimeline() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="experience-section section-pad" id="experience" aria-labelledby="experience-title">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="The path so far"
          title={<>Good work is<br /><em>always a team sport.</em></>}
          note="A little over three years building products with thoughtful teams, from mobile-first experiences to enterprise platforms."
          id="experience-title"
        />
        <div className="experience-list">
          <div className="experience-line" aria-hidden="true"><span className="experience-line__fill" /></div>
          {experience.map((item, index) => (
            <motion.article
              className="experience-item"
              key={item.company}
              initial={reduceMotion ? false : { opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.16 }}
              transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : index * 0.07 }}
            >
              <div className="experience-item__date"><span className="timeline-dot" />{item.period}</div>
              <div className="experience-item__main">
                <div className="experience-item__heading"><div><h3>{item.company}</h3><span>{item.role}</span></div><ArrowUpRight size={17} strokeWidth={1.5} /></div>
                <p>{item.summary}</p>
                <ul className="experience-highlights">
                  {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
                <div className="experience-stack">{item.stack.map((technology) => <span key={technology}>{technology}</span>)}</div>
              </div>
            </motion.article>
          ))}
        </div>
        <p className="experience-note">Timeline dates follow the brief; role highlights and metrics are drawn from the supplied resume.</p>
      </div>
    </section>
  )
}
