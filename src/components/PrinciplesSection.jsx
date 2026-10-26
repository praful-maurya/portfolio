import { ArrowDownRight } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import SectionHeading from './SectionHeading.jsx'

const principles = [
  { number: '01', title: 'Reusability over repetition.', detail: 'Build a good pattern once. Give the whole product a stronger foundation.' },
  { number: '02', title: 'Performance is user experience.', detail: 'A fast, responsive interface respects the time and attention of the person using it.' },
  { number: '03', title: 'Separate UI from business logic.', detail: 'Clear boundaries make features easier to understand, test, and change.' },
  { number: '04', title: 'Maintainability over complexity.', detail: 'Prefer the simplest structure that keeps the product ready for what comes next.' },
]

export default function PrinciplesSection() {
  const reduceMotion = useReducedMotion()
  return (
    <section className="principles-section section-pad" aria-labelledby="principles-title">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="How I like to work"
          title={<>A few things I<br /><em>come back to.</em></>}
          note="Principles are useful when they show up in everyday decisions—not just in a slide deck."
          id="principles-title"
        />
        <div className="principles-list">
          {principles.map((principle, index) => (
            <motion.article
              className="principle-row"
              key={principle.number}
              initial={reduceMotion ? false : { opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : index * 0.06 }}
            >
              <span className="principle-row__number">{principle.number}</span>
              <div><h3>{principle.title}</h3><p>{principle.detail}</p></div>
              <ArrowDownRight className="principle-row__arrow" size={20} strokeWidth={1.4} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
