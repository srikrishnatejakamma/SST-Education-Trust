import { useEffect, useState } from "react";
import { headlessApi } from "../api.js";

const learningAreas = [
  { icon: "✳", tone: "icon-ai", index: "THINK", title: "Artificial intelligence", description: "Explore AI concepts, practical applications, and responsible use." },
  { icon: "{ }", tone: "icon-code", index: "MAKE", title: "Programming", description: "Build foundations in Python, Java, Go, and problem-solving." },
  { icon: "⌘", tone: "icon-web", index: "CREATE", title: "Web development", description: "Learn the building blocks of modern websites and applications." },
  { icon: "☁", tone: "icon-cloud", index: "CONNECT", title: "Cloud & DevOps", description: "Discover cloud fundamentals, software delivery, and deployment." },
  { icon: "◉", tone: "icon-digital", index: "NAVIGATE", title: "Digital literacy", description: "Develop essential digital skills and online safety awareness." },
];

function ProgramCard({ program, index }) {
  const fallback = learningAreas[index % learningAreas.length];
  const title = program.title || program.name || fallback.title;
  const description = program.description || program.summary || "Program details will be shared when confirmed.";
  const category = program.category || fallback.index;
  const status = program.status || "Program information";
  const link = /^https?:\/\//i.test(program.url || "") ? program.url : "#contact";

  return (
    <article className="program-card">
      <span className={`program-icon ${fallback.tone}`}>{fallback.icon}</span>
      <span className="program-index">{String(index + 1).padStart(2, "0")} / {category}</span>
      <h3>{title}</h3><p>{description}</p><span className="program-status">{status}</span>
      <a className="card-arrow" href={link} aria-label={`Ask about ${title}`}>↗</a>
    </article>
  );
}

function ContactPrompt() {
  return (
    <article className="program-card program-card-cta">
      <span className="program-index">HAVE A QUESTION?</span><h3>Start a conversation.</h3>
      <p>Tell us what you hope to learn or how you would like to contribute.</p>
      <a className="text-link" href="#contact">Get in touch <span>↗</span></a><span className="cta-decoration">✳</span>
    </article>
  );
}

export default function ProgramsSection() {
  const [programs, setPrograms] = useState(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (!headlessApi.isConfigured) return;
    headlessApi.getPrograms().then((items) => {
      setPrograms(items || []);
      setStatus("Program information is synced from the learning service.");
    }).catch(() => setStatus("Showing the current learning areas. Live program information could not be loaded."));
  }, []);

  const cards = programs === null
    ? learningAreas.map((area) => ({ ...area, status: "Learning area" }))
    : programs;

  return (
    <section className="programs-section section-pad" id="programs">
      <div className="container">
        <div className="section-heading"><div><p className="section-kicker">EXPLORE YOUR CURIOSITY</p><h2>Room to <em>learn.</em></h2></div><p>These are proposed learning areas. Confirmed programs, requirements, dates, and fees will be published when available.</p></div>
        <div className="program-grid" aria-live="polite">
          {cards.length
            ? cards.map((program, index) => <ProgramCard key={program.id || program.slug || program.title || index} program={program} index={index}/>)
            : <div className="empty-programs"><span>✳</span><p>No program listings are published at the moment. Please check back for confirmed opportunities.</p></div>}
          <ContactPrompt />
        </div>
        <p className="api-status" role="status">{status}</p>
      </div>
    </section>
  );
}
