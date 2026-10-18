const questionGroups = [
  { title: "About the Foundation", items: [
    ["What is Sri Surya Teja Foundation for Education & Technology?", "It is a proposed public charitable initiative focused on education, technology skill development, and digital inclusion. The final legal name and registration details must be confirmed before publication."],
    ["What is the Foundation’s purpose?", "The proposed focus is accessible technology education, practical skills, scholarships, mentorship, digital learning, and community-oriented education."],
  ]},
  { title: "Courses and programs", items: [
    ["Which courses will be available?", "Proposed areas include programming foundations, full-stack development, databases, cloud, DevOps, AI and data, and career development. Java/Spring Boot, Python, SQL, cloud/DevOps, and Generative AI/AI agents are example catalogue tracks. Only confirmed batches will be open for enrollment."],
    ["Can beginners participate?", "Some proposed programs are intended for beginners. Each confirmed program will state its audience and prerequisites."],
    ["Are programs online or in person?", "Online, in-person, or hybrid delivery may be offered depending on the program. The confirmed format will be shown on its details page."],
    ["How long does a course take?", "Durations shown in the catalog are planning suggestions. A confirmed duration and schedule will be published for each available program."],
    ["Will I receive a certificate?", "If a certificate is offered, the program will state its type and completion criteria. The Trust will not imply accreditation or government recognition without verification."],
    ["Does the Trust guarantee jobs?", "No. Programs may help learners develop skills, but employment depends on individual preparation, experience, market conditions, and other factors."],
    ["Do you offer AWS, Azure, or Google Cloud training?", "The Foundation intends to develop cloud learning across these platforms, subject to instructors, curriculum, resources, and program availability. Any account requirements and possible costs must be disclosed."],
    ["Are AWS, Microsoft, or Google official partners?", "No provider partnership or endorsement is claimed. The Foundation may explore eligible educational collaborations; any relationship would be announced only after formal confirmation."],
  ]},
  { title: "Free learning and scholarships", items: [
    ["Are all programs free?", "No. The Trust aims to offer a mix of free learning activities and structured training. Any confirmed fees and participation terms will be shared before enrollment."],
    ["Can I apply for a scholarship?", "A scholarship intake may be announced if funding and an approved process are available. Criteria, documents, deadlines, and selection steps will be published for each intake."],
    ["Will every scholarship applicant receive support?", "No. Selection depends on published criteria, available funding, and the number of eligible applications."],
  ]},
  { title: "Enrollment and payments", items: [
    ["How do I enroll?", "Use the contact form to express interest. A confirmed program will provide its schedule, prerequisites, fees, and enrollment instructions. An inquiry alone does not confirm a place."],
    ["Are fees refundable?", "Refunds depend on the final program-specific cancellation terms and applicable requirements. Review the terms before paying; payment enrollment is not enabled here."],
    ["Can I transfer to another batch?", "Transfers would depend on the program’s published terms, space, and written confirmation."],
  ]},
  { title: "Volunteering, partnerships, and support", items: [
    ["Can I volunteer as a trainer or mentor?", "You can use the inquiry form to share your experience, topics, and availability. Any role is subject to suitability and confirmation."],
    ["Can a company sponsor learners or programs?", "The Foundation intends to explore lawful sponsorships and eligible CSR collaborations. Eligibility, project readiness, and applicable requirements must be established first."],
    ["Can my institution collaborate with the Foundation?", "Suitable organizations can submit an inquiry. A collaboration is confirmed only after review and a formal agreement where required."],
    ["Can I volunteer?", "Interested educators and technology professionals can use the contact form to express interest in teaching, mentoring, or supporting programs. Roles depend on active programs, safeguarding, supervision, and suitability."],
    ["Can I make a donation?", "This website is not soliciting financial contributions. Payment instructions will appear only after legal eligibility and operating arrangements are verified."],
    ["Are donations tax-deductible?", "Do not assume tax deductibility. No tax-benefit claim is made here; any future statement would require verified approval and applicable conditions."],
  ]},
  { title: "Contact and privacy", items: [
    ["How can I contact the Foundation?", "Use the inquiry form. It will send information only after the headless contact service is configured; the site will not claim that an unconfigured submission was sent."],
    ["How is my information handled?", "The final privacy notice must match actual forms and service providers. Do not submit passwords, payment credentials, or unnecessary sensitive information."],
    ["Is there a learner portal?", "No learner portal is linked here. If a confirmed program uses a configured platform, learners will receive instructions through an official channel."],
  ]},
];

export function FAQSection() {
  return (
    <section className="faq-section section-pad">
      <div className="container faq-grid">
        <div><p className="section-kicker">A FEW THINGS TO KNOW</p><h2>Good questions<br/>are <em>welcome.</em></h2><p className="faq-intro">Program details will be published as they are confirmed. Here’s what to expect.</p></div>
        <div className="faq-list">{questionGroups.map((group) => <div className="faq-group" key={group.title}><h3>{group.title}</h3>{group.items.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>)}</div>
      </div>
    </section>
  );
}

export function PrivacySection() {
  return (
    <section className="privacy-section" id="privacy">
      <div className="container privacy-inner">
        <div><p className="section-kicker">YOUR INFORMATION</p><h2>A little privacy <em>note.</em></h2></div>
        <p>Details submitted through the inquiry form are intended to help respond to your message. The form sends information only after a headless API endpoint is configured. The final privacy notice should be reviewed to match the Trust’s actual services and data practices. Do not submit sensitive information.</p>
      </div>
    </section>
  );
}
