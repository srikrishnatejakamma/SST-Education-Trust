const questionGroups = [
  { title: "About the Trust", items: [
    ["What is SST Education Trust?", "SST Education Trust is an education-focused initiative in Andhra Pradesh, India, aiming to promote accessible education, technology training, digital literacy, practical skills, and lifelong learning. Legal status and registration details will be published only after verification."],
    ["Where is the Trust based?", "The initiative is based in Andhra Pradesh, India. An official office address will be published when verified."],
    ["What is the Trust’s purpose?", "The intended purpose is to promote educational opportunity, practical skills, technology awareness, and lifelong learning through suitable programs and activities."],
  ]},
  { title: "Courses and programs", items: [
    ["Which courses will be available?", "Planned subjects include Python, Java, Go, AI and Generative AI, React, Angular, web development, AWS, Azure, Google Cloud, DevOps, and digital literacy. Only confirmed batches will be shown as open for enrollment."],
    ["Can beginners participate?", "Some proposed programs are intended for beginners. Each confirmed program will state its audience and prerequisites."],
    ["Are programs online or in person?", "Online, in-person, or hybrid delivery may be offered depending on the program. The confirmed format will be shown on its details page."],
    ["How long does a course take?", "Durations shown in the catalog are planning suggestions. A confirmed duration and schedule will be published for each available program."],
    ["Will I receive a certificate?", "If a certificate is offered, the program will state its type and completion criteria. The Trust will not imply accreditation or government recognition without verification."],
    ["Does the Trust guarantee jobs?", "No. Programs may help learners develop skills, but employment depends on individual preparation, experience, market conditions, and other factors."],
    ["Are cloud courses free to use?", "Cloud and AI services may charge for usage. A program must state whether learners need their own account or use a managed lab, along with any cost safeguards."],
  ]},
  { title: "Free learning and scholarships", items: [
    ["Are all programs free?", "No. The Trust aims to offer a mix of free learning activities and structured training. Any confirmed fees and participation terms will be shared before enrollment."],
    ["Can I apply for a scholarship?", "A scholarship may be announced if funding and an approved process are available. Eligibility and application requirements will be published with the opportunity."],
    ["Will every scholarship applicant receive support?", "No. Selection depends on published criteria, available funding, and the number of eligible applications."],
  ]},
  { title: "Enrollment and payments", items: [
    ["How do I enroll?", "Use the contact form to express interest. A confirmed program will provide its schedule, prerequisites, fees, and enrollment instructions. An inquiry alone does not confirm a place."],
    ["Are fees refundable?", "Refunds depend on the final program-specific cancellation terms and applicable requirements. Review the terms before paying; payment enrollment is not enabled here."],
    ["Can I transfer to another batch?", "Transfers would depend on the program’s published terms, space, and written confirmation."],
  ]},
  { title: "Volunteering, partnerships, and support", items: [
    ["Can I volunteer as a trainer or mentor?", "You can use the inquiry form to share your experience, topics, and availability. Any role is subject to suitability and confirmation."],
    ["Can my institution collaborate with the Trust?", "Suitable organizations can submit an inquiry. A collaboration is confirmed only after review and a formal agreement where required."],
    ["Can I make a donation?", "This website is not soliciting financial contributions. Payment instructions will appear only after legal eligibility and operating arrangements are verified."],
    ["Are donations tax-deductible?", "Do not assume tax deductibility. No tax-benefit claim is made here; any future statement would require verified approval and applicable conditions."],
  ]},
  { title: "Contact and privacy", items: [
    ["How can I contact the Trust?", "Use the inquiry form. It will send information only after the headless contact service is configured; the site will not claim that an unconfigured submission was sent."],
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
