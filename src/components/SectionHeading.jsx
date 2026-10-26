import Reveal from './Reveal.jsx'

export default function SectionHeading({ eyebrow, title, note, id }) {
  return (
    <div className="section-heading">
      <Reveal className="section-heading__main">
        <p className="eyebrow"><span className="eyebrow__dot" />{eyebrow}</p>
        <h2 id={id}>{title}</h2>
      </Reveal>
      {note && <Reveal className="section-heading__note" delay={0.12}>{note}</Reveal>}
    </div>
  )
}
