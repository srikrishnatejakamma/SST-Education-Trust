import { useEffect, useState } from "react";
import { headlessApi } from "../api.js";

const learningAreas = [
  { icon: "{ }", tone: "icon-code", index: "START", title: "Programming foundations", description: "Logic, algorithms, Java, Python, JavaScript, SQL, Git, and Linux." },
  { icon: "⌘", tone: "icon-web", index: "BUILD", title: "Full-stack development", description: "Frontend frameworks, backend services, APIs, and application projects." },
  { icon: "◉", tone: "icon-digital", index: "DATA", title: "Database engineering", description: "SQL, data modelling, transactions, indexing, and query optimization." },
  { icon: "☁", tone: "icon-cloud", index: "DEPLOY", title: "Cloud computing", description: "Explore AWS, Microsoft Azure, and Google Cloud fundamentals." },
  { icon: "↗", tone: "icon-ai", index: "DELIVER", title: "DevOps & cloud-native", description: "Git collaboration, CI/CD, containers, Kubernetes, and IaC." },
  { icon: "✳", tone: "icon-ai", index: "EXPLORE", title: "AI & data", description: "Machine learning, Generative AI, RAG, AI agents, and responsible use." },
  { icon: "＋", tone: "icon-web", index: "GROW", title: "Career readiness", description: "Portfolios, interviews, communication, system design, and teamwork." },
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
