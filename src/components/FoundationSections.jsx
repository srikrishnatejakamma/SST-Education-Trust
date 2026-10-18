const aiFocus = [
  ["AI fundamentals", "Introductory ideas in artificial intelligence, machine learning, data, and model evaluation."],
  ["Generative AI", "Large language model concepts, prompt design, and AI-powered applications."],
  ["RAG & knowledge assistants", "Connect language models to documents and knowledge sources for grounded answers."],
  ["AI agents", "Explore tool use, workflow orchestration, evaluation, and human oversight."],
  ["AI for learning", "Consider educational assistants, coding support, and learning resources."],
  ["Responsible AI", "Promote privacy, security, fairness, transparency, and appropriate human review."],
];

const ruralActivities = ["Basic computer literacy", "Programming fundamentals", "Digital skills workshops", "Internet and online-learning awareness", "Coding clubs", "Introduction to AI", "Career awareness", "Community and college partnerships", "Shared educational computer access"];

const resources = [
  ["Programming tutorials", "Potential beginner material for Java, Python, Go, JavaScript, and software engineering."],
  ["Database learning", "Possible SQL practice, database design, query exercises, and learning guides."],
  ["Cloud & DevOps guides", "Potential introductory material for cloud, deployment, and containers."],
  ["AI learning resources", "Possible guides for AI fundamentals, Generative AI, RAG, and responsible development."],
];

export function AISection() {
  return (
    <section className="ai-section section-pad" id="ai-emerging"><div className="container">
      <div className="section-heading"><div><p className="section-kicker">AI &amp; EMERGING TECHNOLOGIES</p><h2>Understand it.<br/><em>Build responsibly.</em></h2></div><p>We aim to help learners move from AI concepts to practical applications while paying attention to privacy, security, fairness, evaluation, and human oversight.</p></div>
      <div className="ai-focus-grid">{aiFocus.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p><small>Proposed learning focus</small></article>)}</div>
      <div className="ai-project-note"><strong>Example project direction</strong><p>An educational question-answering assistant using approved services, suitable privacy safeguards, source grounding, and human review. This is a concept, not a service currently offered.</p></div>
    </div></section>
  );
}

export function RuralEducationSection() {
  return (
    <section className="rural-section section-pad" id="rural-education"><div className="container rural-grid">
      <div><p className="section-kicker">RURAL DIGITAL EDUCATION</p><h2>Bring digital learning<br/><em>closer to communities.</em></h2><p>Access to computers, connectivity, and experienced educators can be limited in some communities. A proposed Rural Digital Education Mission would explore practical learning closer to students, introduced in stages as funding, local partners, educators, and infrastructure allow.</p><div className="rural-note"><strong>Long-term direction</strong><p>Community learning opportunities that help learners build digital confidence, explore technology careers, and continue learning beyond the classroom.</p></div></div>
      <div className="rural-activities"><h3>Potential activities</h3><ul>{ruralActivities.map((activity) => <li key={activity}><span>↗</span>{activity}</li>)}</ul></div>
    </div></section>
  );
}

export function ResourcesSection() {
  return (
    <section className="resources-section section-pad" id="resources"><div className="container">
      <div className="section-heading"><div><p className="section-kicker">RESOURCES &amp; LEARNING</p><h2>A learning library<br/><em>can grow over time.</em></h2></div><p>We may develop a knowledge portal with tutorials, notes, exercises, project guides, recorded workshops, open-source work, and career preparation. No resource library is linked until materials are prepared and reviewed.</p></div>
      <div className="resources-grid">{resources.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p><small>Planned content area</small></article>)}</div>
      <div className="resource-formats"><strong>Possible formats</strong><span>Tutorials</span><span>Study notes</span><span>Coding exercises</span><span>Project guides</span><span>Recorded workshops</span><span>Learning paths</span></div>
    </div></section>
  );
}

export function GovernanceSection() {
  const records = ["Trust registration details", "Trustee and governance information", "Annual reports and audited statements", "Applicable tax approvals", "CSR-1 details where relevant", "Scholarship, donation, privacy, and safeguarding policies", "Conflict-of-interest arrangements"];
  return (
    <section className="governance-section section-pad" id="governance"><div className="container governance-grid">
      <div><p className="section-kicker">GOVERNANCE &amp; TRANSPARENCY</p><h2>Responsible governance.<br/><em>Evidence-led reporting.</em></h2><p>The Foundation intends to maintain appropriate governance, financial accountability, and responsible administration as its programs develop. No registration, approval, trustee, audit, or partner details are asserted here.</p></div>
      <div><div className="governance-note"><strong>Publish verified records only</strong><p>Documents should be current, approved for public release, and reviewed for confidential, personal, banking, tax, and signature information.</p></div><h3>Information that may be published when verified</h3><ul>{records.map((record) => <li key={record}><span>—</span>{record}</li>)}</ul></div>
    </div></section>
  );
}
