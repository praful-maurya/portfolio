import { useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Plus, Minus } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import SectionHeading from './SectionHeading.jsx'
import ProjectMockups from './ProjectMockups.jsx'

function ProjectItem({ project, index }) {
  const [expanded, setExpanded] = useState(false)
  const reduceMotion = useReducedMotion()
  const reversed = index % 2 === 1

  return (
    <motion.article
      className={`project-row${reversed ? ' project-row--reverse' : ''}`}
      initial={reduceMotion ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: reduceMotion ? 0 : 0.72, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="project-row__visual-wrap">
        <ProjectMockups variant={project.variant} />
      </div>
      <div className="project-copy">
        <div className="project-copy__top"><span className="project-number">{project.number} / 04</span><span className="project-type">{project.type}</span></div>
        <h3>{project.name}</h3>
        <p className="project-summary">{project.summary}</p>
        <div className="project-tech" aria-label="Technologies">
          {project.technologies.map((technology, techIndex) => (
            <motion.span
              key={technology}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: reduceMotion ? 0 : techIndex * 0.055, duration: 0.32 }}
            >
              {technology}
            </motion.span>
          ))}
        </div>
        <button
          className="project-expand"
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          {expanded ? 'Less about the work' : 'More about the work'}
          {expanded ? <Minus size={15} /> : <Plus size={15} />}
        </button>
        <motion.div
          className="project-details"
          initial={false}
          animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.35 }}
          aria-hidden={!expanded}
        >
          <ul>
            {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
          </ul>
        </motion.div>
        <span className="project-copy__arrow" aria-hidden="true"><ArrowDownRight size={22} /></span>
      </div>
    </motion.article>
  )
}

export default function ProjectShowcase({ projects }) {
  return (
    <section className="work-section section-pad" id="work" aria-labelledby="work-title">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="A selection of work"
          title={<>Made for people.<br /><em>Built to work.</em></>}
          note="A few products and platforms I’ve helped bring to life, across research, community, benefits, and sport."
          id="work-title"
        />
        <div className="project-list">
          {projects.map((project, index) => <ProjectItem key={project.number} project={project} index={index} />)}
        </div>
        {/* <div className="work-footnote"><span>01—04</span><span>Product interface mockups are original visual studies, not product screenshots.</span></div> */}
      </div>
    </section>
  )
}
