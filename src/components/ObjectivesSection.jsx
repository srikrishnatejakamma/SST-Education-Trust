const objectives = [
  "Promote education, lifelong learning, and practical abilities.",
  "Advance technology education across computing and related fields.",
  "Encourage hands-on practice, project work, and problem-solving.",
  "Organize workshops, seminars, coding sessions, and other educational activities as resources permit.",
  "Explore free learning, affordable programs, and need-based assistance.",
  "Promote digital literacy and responsible use of online tools.",
  "Encourage creativity, research, and responsible innovation.",
  "Support mentorship by educators, professionals, and volunteers.",
  "Build suitable educational partnerships.",
  "Support communication, teamwork, portfolios, and career awareness.",
  "Develop tutorials, exercises, project guides, and learning resources.",
  "Promote cybersecurity, privacy, accessibility, and ethical AI awareness.",
  "Contribute to communities with limited access to learning opportunities.",
  "Manage resources consistently with verified governing documents and applicable requirements.",
];

export default function ObjectivesSection() {
  return (
    <section className="objectives-section section-pad" id="objectives"><div className="container">
      <div className="section-heading"><div><p className="section-kicker">MISSION, VISION &amp; OBJECTIVES</p><h2>A direction for<br/><em>lifelong learning.</em></h2></div><p>Our proposed vision is an inclusive society where learners, regardless of economic background or location, can access quality education, technology skills, and opportunities for growth. These objectives describe the intended focus and must align with verified governing documents.</p></div>
      <div className="objectives-grid">{objectives.map((objective, index) => <article key={objective}><span>{String(index + 1).padStart(2, "0")}</span><p>{objective}</p></article>)}</div>
    </div></section>
  );
}
