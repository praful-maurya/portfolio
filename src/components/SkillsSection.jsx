import { ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import SectionHeading from './SectionHeading.jsx'

const groups = [
  { label: '01 / Interface', title: 'Frontend', skills: ['React.js', 'React Native', 'Next.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Bootstrap'] },
  { label: '02 / Structure', title: 'Architecture', skills: ['React Hooks', 'Redux Toolkit', 'Reusable components', 'Modular frontend design'] },
  { label: '03 / Connection', title: 'APIs & services', skills: ['REST APIs', 'Axios', 'Firebase', 'Agora'] },
  { label: '04 / Craft', title: 'Quality & performance', skills: ['Debugging', 'Profiling', 'Code splitting', 'Lazy loading', 'Jest'] },
  { label: '05 / Workflow', title: 'Tools', skills: ['Git', 'GitHub', 'Postman', 'Jira', 'Android Studio', 'Xcode', 'CI/CD'] },
]

function SkillGroup({ group, index }) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.article
      className="skill-group"
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : index * 0.06 }}
    >
      <div className="skill-group__label">{group.label}</div>
      <h3>{group.title}</h3>
      <div className="skill-cloud">
        {group.skills.map((skill) => <span key={skill} tabIndex="0">{skill}<ArrowUpRight size={12} /></span>)}
      </div>
    </motion.article>
  )
}

export default function SkillsSection() {
  return (
    <section className="skills-section section-pad" id="skills" aria-labelledby="skills-title">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Tools of the trade"
          title={<>A flexible toolkit.<br /><em>A practical mindset.</em></>}
          note="The right tool is the one that makes the interface clearer, faster, and easier to care for."
          id="skills-title"
        />
        <div className="skills-grid">{groups.map((group, index) => <SkillGroup key={group.title} group={group} index={index} />)}</div>
      </div>
    </section>
  )
}
