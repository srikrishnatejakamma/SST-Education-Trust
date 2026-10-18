const involvementOptions = [
  ["↗", "01", "Learn with us", "Ask about programming, databases, cloud, AI, and digital learning.", "For learners", "Course enrollment"],
  ["✳", "02", "Share your skills", "Teach, mentor projects, review portfolios, or support digital literacy.", "For educators", "Volunteering or mentoring"],
  ["⌘", "03", "Build together", "Explore college, industry, technology, and community collaboration.", "For partners", "Institutional partnership"],
];

export default function InvolvedSection() {
  function chooseTopic(topic) {
    const select = document.querySelector("#topic");
    if (select) select.value = topic;
  }

  return (
    <section className="involved-section section-pad" id="get-involved">
      <div className="container">
        <div className="section-heading"><div><p className="section-kicker">LEARNING IS BETTER TOGETHER</p><h2>Bring what you know.<br/><em>Find what’s next.</em></h2></div><p>There are many ways to be part of a learning community. We welcome conversations with people and organizations who share this purpose.</p></div>
        <div className="involved-grid">{involvementOptions.map(([icon, number, title, text, label, topic]) => <a className="involved-card" href="#contact" key={number} onClick={() => chooseTopic(topic)}><span className="involved-icon">{icon}</span><span className="involved-number">{number}</span><h3>{title}</h3><p>{text}</p><span className="involved-link">{label}<b>↗</b></span></a>)}</div>
      </div>
    </section>
  );
}
