const values = [
  ["01", "Make it clear", "Build understanding with thoughtful explanations and strong foundations."],
  ["02", "Learn by doing", "Turn ideas into practice through exercises, experiments, and projects."],
  ["03", "Grow together", "Make room for collaboration, mentorship, and continuous learning."],
];

export default function AboutSection() {
  return (
    <section className="intro-band section-pad" id="about">
      <div className="container intro-grid">
        <div><p className="section-kicker">WHO WE ARE</p><h2>Learning that meets<br/>people <em>where they are.</em></h2></div>
        <div className="intro-text">
          <p>SST Education Trust is an education-focused initiative working to promote accessible learning, technology awareness, practical skill development, and lifelong learning.</p>
          <p>We believe strong foundations, hands-on practice, and a supportive community can help people discover new possibilities at every stage of life.</p>
          <a className="text-link" href="#mission">Our mission &amp; vision <span>↗</span></a>
        </div>
      </div>
      <div className="container values-row">
        {values.map(([number, title, text]) => <div className="value-item" key={number}><span className="value-number">{number}</span><div><strong>{title}</strong><p>{text}</p></div></div>)}
      </div>
    </section>
  );
}
