const bootcamps = ["Python for Beginners", "Build Your First Website", "Introduction to Generative AI", "React.js Fundamentals", "Java Programming Essentials", "Cloud Fundamentals", "Git and GitHub Workshop", "Introduction to DevOps", "Build and Deploy a Project"];

const impactMeasures = ["Learner participation", "Programs and workshops delivered", "Course completions", "Learner projects completed", "Free and sponsored places", "Scholarships or fee support", "Volunteers and mentors", "Confirmed educational partnerships"];

const partnerTypes = [
  ["Schools & colleges", "Introductory technology sessions, workshops, coding events, and digital literacy."],
  ["Technology professionals", "Contribute as speakers, mentors, trainers, or project reviewers."],
  ["Educational organizations", "Explore joint learning activities, resource development, and outreach."],
  ["Industry & sponsors", "Discuss suitable sponsorships and educational support arrangements."],
  ["Community groups", "Explore ways to reach learners facing barriers to education."],
  ["Grant providers", "Discuss funding for eligible programs, scholarships, and learning resources."],
];

export function FreeEducationSection() {
  const initiatives = [
    ["Introductory workshops", "Short sessions introducing programming, AI, web development, cloud, or digital literacy."],
    ["Community learning", "Activities that encourage questions, practice, and knowledge sharing."],
    ["Open learning resources", "Materials, tutorials, exercises, and project guides where available."],
    ["Sponsored opportunities", "Free places in selected programs when lawful funding and arrangements exist."],
    ["Digital literacy", "Basic digital skills, online safety, and responsible technology awareness."],
  ];
  return (
    <section className="free-learning-section section-pad" id="free-learning"><div className="container">
      <div className="section-heading"><div><p className="section-kicker">FREE EDUCATION</p><h2>Learning should not<br/>depend only on <em>means.</em></h2></div><p>We aim to expand access through selected free learning activities and community-oriented education. Availability depends on funding, trainers, infrastructure, and operational capacity.</p></div>
      <div className="free-initiative-grid">{initiatives.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      <div className="free-footnote"><span>PLEASE NOTE</span><p>Free participation is not guaranteed for every course. Eligibility, selection, schedule, and available places will be communicated for each confirmed initiative.</p></div>
    </div></section>
  );
}

export function BootcampsSection() {
  return (
    <section className="bootcamps-section section-pad" id="bootcamps">
      <div className="container">
        <div className="section-heading"><div><p className="section-kicker">FOCUSED LEARNING · PROPOSED</p><h2>Small steps.<br/><em>Practical momentum.</em></h2></div><p>Boot camps and workshops are proposed formats. Event registrations will open only after the schedule, delivery arrangements, equipment needs, and participation conditions are confirmed.</p></div>
        <div className="bootcamp-grid">{bootcamps.map((name, index) => <article className="bootcamp-card" key={name}><span>{String(index + 1).padStart(2, "0")}</span><h3>{name}</h3><p>{index === 0 ? "Programming basics, problem solving, and a small application." : index === 1 ? "HTML, CSS, JavaScript, and responsive design through a website project." : index === 2 ? "Explore prompting, use cases, limitations, privacy, and responsible AI." : "A focused, guided introduction with practical exercises and project work."}</p><small>Proposed workshop idea</small></article>)}</div>
        <div className="format-row"><strong>Possible formats</strong><span>Introductory sessions</span><span>Weekend workshops</span><span>Short intensive boot camps</span><span>Project-building events</span><span>Coding challenges</span></div>
      </div>
    </section>
  );
}

export function ScholarshipsSection() {
  const assistance = [["Full fee support", "Coverage of an eligible program fee for selected applicants, if funding is available."], ["Partial fee assistance", "A reduction in the eligible program fee, subject to published criteria."], ["Sponsored course seats", "Participation supported by an approved sponsor or educational partner."], ["Learning resources", "Approved learning materials or related costs where a program permits."]];
  return (
    <section className="scholarship-section section-pad" id="scholarships">
      <div className="container scholarship-grid"><div><p className="section-kicker">ACCESS &amp; LEARNING SUPPORT</p><h2>Helping learners<br/>find a way <em>in.</em></h2><p>Scholarships and financial assistance may be explored for learners facing financial barriers, when funding and an approved process are available.</p><p className="small-note">No scholarship is currently advertised here. Applications will not be accepted until an opportunity, criteria, privacy process, and contact route are confirmed.</p></div>
        <div><div className="assistance-grid">{assistance.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div><div className="scholarship-process"><h3>When an opportunity is announced</h3><ol><li>Review the published eligibility and terms.</li><li>Apply through the stated official process.</li><li>Share only the information specifically requested.</li><li>Complete an interview or assessment only if disclosed in advance.</li><li>Wait for written confirmation through the official channel.</li></ol></div></div>
      </div>
    </section>
  );
}

export function ImpactSection() {
  return (
    <section className="impact-section section-pad" id="impact"><div className="container">
      <div className="section-heading"><div><p className="section-kicker">OUR IMPACT</p><h2>Measure what<br/><em>matters.</em></h2></div><p>We aim to report participation, practical learning, and opportunities created using reliable records. No learner counts, outcomes, testimonials, or success rates are published without evidence.</p></div>
      <div className="impact-grid"><div className="impact-lede"><span className="impact-symbol">✳</span><h3>Learning progress is more than a number.</h3><p>Reports will distinguish planned activities, work completed, and outcomes actually measured.</p></div><div className="impact-measures"><h3>Measures we may report when records exist</h3><ul>{impactMeasures.map((measure) => <li key={measure}><span>+</span>{measure}</li>)}</ul><p className="small-note">Each figure will include a reporting period and a clear basis for calculation.</p></div></div>
    </div></section>
  );
}

export function PartnershipsSection() {
  return (
    <section className="partnership-section section-pad" id="partnerships"><div className="container">
      <div className="section-heading"><div><p className="section-kicker">PARTNERSHIPS &amp; COLLABORATION</p><h2>Learning grows<br/><em>through connection.</em></h2></div><p>We welcome conversations about suitable educational collaboration. A partnership or sponsorship is not confirmed until it is formally agreed, approved, and documented.</p></div>
      <div className="partner-grid">{partnerTypes.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      <div className="partner-process"><strong>How a partnership inquiry moves forward</strong><ol><li>Share organization details and area of interest.</li><li>Describe the proposed learning opportunity and intended participants.</li><li>Discuss objectives, resources, roles, and reporting expectations.</li><li>Review agreements, approvals, and applicable conditions.</li><li>Proceed after the arrangement is appropriately approved and documented.</li></ol></div>
    </div></section>
  );
}

export function SupportSection() {
  const supportAreas = ["Free educational workshops", "Scholarships and fee assistance", "Learning resources and equipment", "Technology infrastructure", "Community learning", "Curriculum and trainer support"];
  return (
    <section className="support-section section-pad" id="support"><div className="container support-grid"><div><p className="section-kicker">SUPPORT EDUCATION</p><h2>Help make learning<br/>more <em>accessible.</em></h2><p>Support may take the form of skills, suitable resources, or a formal educational partnership.</p></div><div><div className="support-notice"><strong>Financial contributions are not being solicited on this website.</strong><p>Payment links and donation instructions will be published only after legal eligibility, approved payment arrangements, accounting controls, and applicable requirements are verified.</p></div><h3>Support may help with</h3><ul className="support-list">{supportAreas.map((area) => <li key={area}><span>↗</span>{area}</li>)}</ul><p className="small-note">Tax benefits are not automatic. No tax deduction, registration, or contribution eligibility is claimed here.</p></div></div></section>
  );
}
