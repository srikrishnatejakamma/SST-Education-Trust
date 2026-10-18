const accessOptions = [
  ["01", "Free learning", "Introductory workshops and community learning, as available."],
  ["02", "Practical training", "Structured learning designed around practice and application."],
  ["03", "Learning support", "Assistance explored as resources and eligibility permit."],
];

export default function AccessSection() {
  return (
    <section className="access-section section-pad">
      <div className="container access-grid">
        <div><p className="section-kicker">ACCESS TO LEARNING</p><h2>More ways in.<br/><em>More room to grow.</em></h2></div>
        <div className="access-copy">
          <p>We aim to expand access through free learning initiatives and affordable training where resources permit. Scholarships and learning assistance may be explored when funding and eligibility allow.</p>
          <div className="access-cards">{accessOptions.map(([number, title, text]) => <div key={number}><span>{number}</span><strong>{title}</strong><p>{text}</p></div>)}</div>
          <p className="small-note">Program availability and any fees or eligibility criteria will be stated before enrollment.</p>
        </div>
      </div>
    </section>
  );
}
