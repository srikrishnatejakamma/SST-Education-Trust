const values = [
  ["01", "Accessibility", "Reduce financial, geographic, and technology barriers to learning."],
  ["02", "Integrity", "Work toward transparency, accountability, and responsible governance."],
  ["03", "Responsible innovation", "Build practical skills while respecting privacy, security, fairness, and inclusion."],
];

export default function AboutSection() {
  return (
    <section className="intro-band section-pad" id="about">
      <div className="container intro-grid">
        <div><p className="section-kicker">WHO WE ARE</p><h2>Technology education<br/>for <em>every learner.</em></h2></div>
        <div className="intro-text">
          <p>Sri Surya Teja Foundation for Education &amp; Technology is a proposed public charitable initiative focused on education, technology skills, and digital inclusion.</p>
          <p>We aim to help students, graduates, aspiring developers, and underserved communities learn through practical training, projects, scholarships, mentorship, and digital education.</p>
          <p>Our proposed focus includes programming, full-stack development, databases, cloud computing, DevOps, cybersecurity fundamentals, and Artificial Intelligence.</p>
          <a className="text-link" href="#objectives">Our vision &amp; mission <span>↗</span></a>
        </div>
      </div>
      <div className="container values-row">
        {values.map(([number, title, text]) => <div className="value-item" key={number}><span className="value-number">{number}</span><div><strong>{title}</strong><p>{text}</p></div></div>)}
      </div>
    </section>
  );
}
