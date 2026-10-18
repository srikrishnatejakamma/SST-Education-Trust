const involvementOptions = [
  ["↗", "01", "Learn with us", "Ask about learning areas and upcoming opportunities.", "For learners", "Course enrollment"],
  ["✳", "02", "Share your skills", "Explore volunteering, teaching, and mentorship.", "For educators", "Volunteering or mentoring"],
  ["⌘", "03", "Build together", "Start a conversation about educational collaboration.", "For partners", "Institutional partnership"],
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
