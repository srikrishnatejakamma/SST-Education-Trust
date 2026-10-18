import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";

export function Brand({ footer = false }) {
  return (
    <Link className={`brand${footer ? " footer-brand" : ""}`} to="/" aria-label="Sri Surya Teja Foundation for Education and Technology home">
      <span className="brand-mark" aria-hidden="true"><svg viewBox="0 0 40 40"><path d="M4 11.5c6-2.7 11.3-1.8 16 2.6v19c-4.7-4.4-10-5.3-16-2.6v-19Zm32 0c-6-2.7-11.3-1.8-16 2.6v19c4.7-4.4 10-5.3 16-2.6v-19Z"/><path d="M20 14v19"/></svg></span>
      <span className="brand-copy"><strong>Sri Surya Teja <b>Foundation</b></strong><small>Learn. Build. Innovate. Empower.</small></span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const close = (event) => {
    setOpen(false);
    const details = event?.currentTarget.closest(".nav-more")?.querySelector("details");
    if (details) details.open = false;
  };

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Brand />
        <button className="menu-toggle" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(!open)}><span/><span/></button>
        <nav id="primary-nav" className={`primary-nav${open ? " is-open" : ""}`} aria-label="Main navigation">
          <NavLink to="/" end onClick={close}>Home</NavLink>
          <NavLink to="/about-us" onClick={close}>About</NavLink>
          <NavLink to="/programs" onClick={close}>Programs</NavLink>
          <NavLink to="/scholarships" onClick={close}>Scholarships</NavLink>
          <NavLink to="/partnerships" onClick={close}>Partnerships</NavLink>
          <div className="nav-more"><details><summary>More <span aria-hidden="true">⌄</span></summary><div className="nav-more-menu">
            <NavLink to="/digital-education" onClick={close}>Digital Education</NavLink>
            <NavLink to="/ai-emerging-technologies" onClick={close}>AI &amp; Emerging Technologies</NavLink>
            <NavLink to="/impact" onClick={close}>Our Impact</NavLink>
            <NavLink to="/resources" onClick={close}>Resources</NavLink>
            <NavLink to="/governance-transparency" onClick={close}>Governance</NavLink>
            <NavLink to="/volunteer" onClick={close}>Volunteer</NavLink>
          </div></details></div>
          <NavLink to="/contact" className="nav-cta" onClick={close}>Contact us <span aria-hidden="true">↗</span></NavLink>
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
        <nav className="footer-links" aria-label="Footer navigation">
          <Link to="/programs/course-catalogue">Course catalogue</Link><Link to="/programs/boot-camps">Boot camps</Link><Link to="/scholarships">Scholarships</Link><Link to="/partnerships">Partnerships</Link><Link to="/governance-transparency">Governance</Link><Link to="/resources">Resources</Link><Link to="/policies">Policies</Link><Link to="/contact">Contact</Link>
        </nav>
        <Link className="footer-top" to="/">Back to home <span>↑</span></Link>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Sri Surya Teja Foundation for Education &amp; Technology</span>
        <span>Proposed education and technology initiative</span>
        <span>Legal and program details are published only when verified.</span>
      </div>
    </footer>
  );
}
