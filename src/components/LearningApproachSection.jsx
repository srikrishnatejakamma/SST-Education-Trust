const points = [
  "Strong foundations and clear explanations",
  "Guided exercises and hands-on practice",
  "Projects that bring ideas together",
  "Feedback, reflection, and shared learning",
];

export default function LearningApproachSection() {
  return (
    <section className="learning-band section-pad" id="approach">
      <div className="container learning-grid">
        <div className="learning-visual">
          <div className="learning-circle circle-outer"/><div className="learning-circle circle-mid"/><div className="learning-circle circle-inner"><span>KNOW<br/>↓<br/>DO<br/>↓<br/>GROW</span></div>
          <span className="orbit-word word-one">curiosity</span><span className="orbit-word word-two">practice</span><span className="orbit-word word-three">community</span><span className="orbit-star">✳</span>
        </div>
        <div className="learning-copy">
          <p className="section-kicker">OUR LEARNING APPROACH</p><h2>Knowledge comes alive<br/>when you <em>put it to work.</em></h2>
          <p>We aim to pair clear explanations with practical experiences, so learners can build confidence as they build skills.</p>
          <ul className="approach-list">{points.map((point, index) => <li key={point}><span>{String(index + 1).padStart(2, "0")}</span>{point}</li>)}</ul>
          <p className="small-note">Each confirmed program will share its own outcomes, prerequisites, format, and completion requirements.</p>
        </div>
      </div>
    </section>
  );
}
