const courses = [
  { category: "BEGINNER TO ADVANCED", title: "Java & Spring Boot", summary: "Object-oriented programming, collections, Spring Boot, REST APIs, databases, testing, and microservices.", tags: ["Java", "Spring Boot", "REST APIs", "Databases"] },
  { category: "BEGINNER TO ADVANCED", title: "Python development", summary: "Python fundamentals, automation, APIs, data processing, and foundations for AI development.", tags: ["Python", "Automation", "APIs", "AI foundations"] },
  { category: "BEGINNER TO INTERMEDIATE", title: "SQL & database development", summary: "SQL queries, joins, database design, and PostgreSQL, MySQL, and Oracle fundamentals.", tags: ["SQL", "PostgreSQL", "MySQL", "Oracle"] },
  { category: "INTERMEDIATE TO ADVANCED", title: "Cloud & DevOps", summary: "Cloud fundamentals, deployment pipelines, containers, Kubernetes, and cloud-native projects.", tags: ["AWS · Azure · GCP", "CI/CD", "Docker", "Kubernetes"] },
  { category: "INTERMEDIATE TO ADVANCED", title: "Generative AI & AI agents", summary: "LLM application development, RAG, tool use, evaluation, and responsible AI practices.", tags: ["LLMs", "RAG", "AI agents", "Evaluation"] },
];

export default function DetailedProgramsSection() {
  return (
    <section className="catalog-section section-pad" id="course-catalog">
      <div className="container">
        <div className="section-heading"><div><p className="section-kicker">COURSE CATALOGUE · PROPOSED</p><h2>Follow a path.<br/><em>Build real skills.</em></h2></div><p>These catalogue areas help learners explore the intended curriculum. Each course will publish its syllabus, duration, prerequisites, learning outcomes, delivery mode, fees, scholarship availability, and application process before enrollment opens.</p></div>
        <div className="course-showcase">{courses.map((course, index) => <article className="course-showcase-card" key={course.title}><div className="course-showcase-top"><span>0{index + 1}</span><small>{course.category}</small></div><h3>{course.title}</h3><p>{course.summary}</p><div className="course-tags">{course.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="course-availability">Course outline only <span>Enrollment details to be confirmed</span></div></article>)}</div>
        <div className="catalog-note"><strong>Related proposed pathways</strong><p><a href="#programs">Programming foundations, full-stack development, database engineering, cloud computing, DevOps, AI &amp; data, and career development</a> are outlined in the programs section. Their availability depends on instructors, curriculum, resources, and program readiness.</p></div>
      </div>
    </section>
  );
}
