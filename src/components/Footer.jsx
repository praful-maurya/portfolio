import { ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-wrap site-footer__inner">
        <span>© {new Date().getFullYear()} Praful Maurya</span>
        <span>Designed with care. Built with React.</span>
        <a href="#top">Back to top <ArrowUp size={13} /></a>
      </div>
    </footer>
  )
}
