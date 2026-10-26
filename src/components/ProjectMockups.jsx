import { Activity, ArrowUpRight, Bell, BriefcaseBusiness, CalendarDays, ChartNoAxesColumnIncreasing, CircleHelp, HeartPulse, Search, ShieldCheck, Users, Video } from 'lucide-react'

function ExploraMockup() {
  return (
    <div className="mock-ui mock-ui--explora">
      <aside className="mock-sidebar">
        <div className="mock-brand"><span className="mock-brand__mark">e</span> explorastory</div>
        <span className="mock-sidebar__label">WORKSPACE</span>
        <div className="mock-side-item mock-side-item--active">◈ <span>Research home</span></div>
        <div className="mock-side-item">▤ <span>Studies</span></div>
        <div className="mock-side-item">◎ <span>Participants</span></div>
        <div className="mock-side-item">◷ <span>Schedule</span></div>
        <div className="mock-sidebar__bottom"><span className="mock-avatar">PM</span><span>Research team</span></div>
      </aside>
      <div className="mock-main">
        <div className="mock-topline"><span>Good morning, Praful</span><span className="mock-icon"><Bell size={13} /></span></div>
        <div className="mock-title-row"><div><small>MONDAY, OCTOBER 26</small><h4>Your research, in focus.</h4></div><span className="mock-pill mock-pill--green">● Study active</span></div>
        <div className="mock-study"><div className="mock-study__video"><Video size={22} /><span>Session in progress</span><div className="mock-video-controls">•••　◉　▰</div></div><div className="mock-study__info"><small>REMOTE INTERVIEW · 24 MIN</small><strong>Everyday banking habits</strong><span><span className="mock-avatar mock-avatar--small">AL</span> Participant 08</span><button type="button">Join session <ArrowUpRight size={12} /></button></div></div>
        <div className="mock-stats"><div><small>RESPONSES</small><strong>128</strong><span>Across 4 studies</span></div><div><small>COMPLETION</small><strong>84%</strong><span>↑ 12% this week</span></div><div className="mock-spark"><small>ACTIVITY</small><div className="spark-bars"><i /><i /><i /><i /><i /><i /><i /></div></div></div>
      </div>
    </div>
  )
}

function NetworkMockup() {
  return (
    <div className="mock-ui mock-ui--network">
      <aside className="mock-sidebar mock-sidebar--dark">
        <div className="mock-brand"><span className="mock-brand__mark mock-brand__mark--rust">r</span> rmb <small>SOBO</small></div>
        <div className="mock-network-profile"><span className="network-portrait">AM</span><strong>Arjun Mehta</strong><small>Founder · Mumbai</small></div>
        <span className="mock-sidebar__label">YOUR SPACE</span>
        <div className="mock-side-item mock-side-item--active">⌂ <span>Home</span></div>
        <div className="mock-side-item">◎ <span>Connections</span></div>
        <div className="mock-side-item">▧ <span>Opportunities</span></div>
        <div className="mock-side-item">◷ <span>Events</span></div>
      </aside>
      <div className="mock-main mock-main--network">
        <div className="mock-topline"><span>Community / Home</span><span className="mock-icon"><Search size={13} /></span></div>
        <div className="network-welcome"><small>YOUR NETWORK, CLOSER</small><h4>Good things happen<br />when we connect.</h4><p>Meet people building what&apos;s next.</p></div>
        <div className="network-section-title"><strong>People to know</strong><span>View all ↗</span></div>
        <div className="network-people">
          <div className="network-person"><span className="network-portrait network-portrait--sage">NK</span><strong>Neha Kulkarni</strong><small>Product · Mumbai</small><button type="button">Connect +</button></div>
          <div className="network-person"><span className="network-portrait network-portrait--sand">RS</span><strong>Rahul Shah</strong><small>Founder · Pune</small><button type="button">Connect +</button></div>
          <div className="network-person"><span className="network-portrait network-portrait--blue">DV</span><strong>Diya Vora</strong><small>Design · Mumbai</small><button type="button">Connect +</button></div>
        </div>
        <div className="network-opportunity"><BriefcaseBusiness size={14} /><span><strong>Community opportunity</strong><small>Explore a new collaboration</small></span><ArrowUpRight size={14} /></div>
      </div>
    </div>
  )
}

function BenefitsMockup() {
  return (
    <div className="mock-ui mock-ui--benefits">
      <aside className="benefits-rail"><div className="benefits-logo">E<span>.</span></div><span className="benefits-rail__active">⌂</span><span>▧</span><span><HeartPulse size={16} /></span><span>◷</span><span className="benefits-rail__bottom"><CircleHelp size={16} /></span></aside>
      <div className="mock-main benefits-main">
        <div className="mock-topline"><span>My benefits / Overview</span><span className="mock-avatar mock-avatar--small">PM</span></div>
        <div className="benefits-greeting"><div><small>MONDAY, 26 OCTOBER</small><h4>Your cover, made clear.</h4><p>Everything you need to know about your benefits.</p></div><span className="benefits-status"><ShieldCheck size={14} /> Covered</span></div>
        <div className="benefits-card"><div><small>HEALTH COVER</small><span className="benefits-card__icon"><HeartPulse size={18} /></span></div><strong>₹ 5,00,000</strong><span>Family floater · Active policy</span><div className="benefits-card__footer"><span>Policy year 2025—26</span><span>View details ↗</span></div></div>
        <div className="benefits-row-title"><strong>Your policies</strong><span>See all</span></div>
        <div className="benefit-policy"><span className="policy-icon"><ShieldCheck size={15} /></span><span><strong>Group health insurance</strong><small>Coverage for you and your family</small></span><span className="policy-tag">ACTIVE</span></div>
        <div className="benefit-policy"><span className="policy-icon policy-icon--rust"><Activity size={15} /></span><span><strong>Wellness benefits</strong><small>Explore available programmes</small></span><ArrowUpRight size={13} /></div>
      </div>
    </div>
  )
}

function CricketMockup() {
  return (
    <div className="mock-ui mock-ui--cricket">
      <div className="cricket-topbar"><div className="cricket-brand">GEPL<span>·</span></div><div className="cricket-nav">HOME　 FIXTURES　 STANDINGS　 NEWS</div><div className="cricket-live"><i /> LIVE</div></div>
      <div className="cricket-heading"><small>GLOBAL E-CRICKET PREMIER LEAGUE</small><h4>The game, in<br /><em>every moment.</em></h4><p>Scores, stories and everything between.</p></div>
      <div className="cricket-match"><div className="cricket-match__head"><span>FEATURED MATCH</span><span className="cricket-match__live"><i /> LIVE · 18.4 OVERS</span></div><div className="cricket-score"><div><span className="cricket-team cricket-team--one">M</span><strong>Mumbai</strong><small>HOME</small></div><strong className="score-number">164<span>/4</span></strong><div className="cricket-score__away"><span className="cricket-team cricket-team--two">C</span><strong>Chennai</strong><small>AWAY</small></div></div><div className="cricket-match__foot"><span>Chennai need 32 runs from 8 balls</span><span>Match centre ↗</span></div></div>
      <div className="cricket-lower"><div><small>UP NEXT</small><strong>Delhi <span>v</span> Kolkata</strong><span><CalendarDays size={11} /> 7:30 PM · Today</span></div><div className="cricket-ad"><small>PARTNER MESSAGE</small><span>A little room for<br />what&apos;s next.</span><ArrowUpRight size={13} /></div></div>
    </div>
  )
}

const mockups = {
  explora: ExploraMockup,
  network: NetworkMockup,
  benefits: BenefitsMockup,
  cricket: CricketMockup,
}

export default function ProjectMockups({ variant }) {
  const Mockup = mockups[variant]
  return (
    <div className={`project-visual project-visual--${variant}`} aria-label={`${variant} original interface mockup`}>
      <div className="project-visual__frame">
        <div className="project-visual__chrome"><i /><i /><i /><span>Product interface concept</span><span className="project-visual__frame-mark">↗</span></div>
        <div className="project-visual__screen"><Mockup /></div>
      </div>
      <div className="project-visual__index"><span>INTERFACE STUDY</span><span>{variant === 'cricket' ? '04 / 04' : variant === 'benefits' ? '03 / 04' : variant === 'network' ? '02 / 04' : '01 / 04'}</span></div>
    </div>
  )
}
