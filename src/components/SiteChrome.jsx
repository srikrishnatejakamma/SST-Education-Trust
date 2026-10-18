import { useEffect, useState } from "react";

export function Brand({ footer = false }) {
  return (
    <a className={`brand${footer ? " footer-brand" : ""}`} href="#home" aria-label="Sri Surya Teja Foundation for Education and Technology home">
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 40 40"><path d="M4 11.5c6-2.7 11.3-1.8 16 2.6v19c-4.7-4.4-10-5.3-16-2.6v-19Zm32 0c-6-2.7-11.3-1.8-16 2.6v19c4.7-4.4 10-5.3 16-2.6v-19Z"/><path d="M20 14v19"/></svg>
      </span>
      <span className="brand-copy"><strong>Sri Surya Teja <b>Foundation</b></strong><small>Learn. Build. Innovate. Empower.</small></span>
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const links = [["About", "#about"], ["Programs", "#programs"], ["Scholarships", "#scholarships"], ["Digital education", "#rural-education"], ["Partnerships", "#partnerships"], ["Impact", "#impact"]];

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Brand />
        <button className="menu-toggle" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(!open)}>
          <span/><span/>
        </button>
        <nav id="primary-nav" className={`primary-nav${open ? " is-open" : ""}`} aria-label="Main navigation">
          {links.map(([label, href]) => <a href={href} key={href} onClick={close}>{label}</a>)}
          <a href="#contact" className="nav-cta" onClick={close}>Talk to us <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <Brand footer />
        <p>Learn. Build.<br/>Innovate. Empower.</p>
        <nav className="footer-links" aria-label="Footer navigation"><a href="#course-catalog">Course catalogue</a><a href="#scholarships">Scholarships</a><a href="#partnerships">Partnerships</a><a href="#governance">Governance</a><a href="#resources">Resources</a><a href="#policies">Policies</a><a href="#contact">Contact</a></nav>
        <a className="footer-top" href="#home">Back to top <span>↑</span></a>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Sri Surya Teja Foundation for Education &amp; Technology</span>
        <span>Proposed education and technology initiative</span>
        <span>Legal and program details are published only when verified.</span>
      </div>
    </footer>
  );
}
