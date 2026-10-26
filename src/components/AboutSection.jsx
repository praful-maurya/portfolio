import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal.jsx'

export default function AboutSection() {
  return (
    <section className="about-section section-pad" id="about" aria-labelledby="about-title">
      <div className="section-wrap about-layout">
        <Reveal className="about-marker">
          <p className="eyebrow"><span className="eyebrow__dot" /> A little about me</p>
          <span className="about-marker__monogram">P<span>.</span>M</span>
          <span className="about-marker__caption">MUMBAI, INDIA<br />BUILDING WITH INTENTION</span>
        </Reveal>
        <div className="about-copy">
          <Reveal>
            <h2 id="about-title">Curious about how things work.<br /><em>Particular about how they feel.</em></h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="about-copy__lead">I’m a frontend engineer who enjoys making reliable web and mobile applications—and the reusable, maintainable interfaces behind them.</p>
            <p className="about-copy__body">My path into software engineering has been shaped by hands-on work, a willingness to keep learning, and the belief that the best interfaces are as considered under the surface as they are on screen.</p>
          </Reveal>
          <Reveal delay={0.16} className="education-note">
            <span className="education-note__icon">B.Com</span>
            <span><strong>Bachelor of Commerce</strong><small>Mumbai University · Supplemented by self-directed software engineering learning</small></span>
            <ArrowUpRight size={16} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
