function PolicyItem({ title, children }) {
  return <details className="policy-item"><summary>{title}<span aria-hidden="true">+</span></summary><div className="policy-copy">{children}</div></details>;
}

export default function PolicyHubSection() {
  return (
    <section className="policy-hub section-pad" id="policies"><div className="container">
      <div className="section-heading"><div><p className="section-kicker">POLICIES &amp; LEARNER INFORMATION</p><h2>Clear expectations.<br/><em>Safer learning.</em></h2></div><p>Draft policy information from the content package. These drafts are not binding policies; they must be finalized to match actual services, approved by the Trust, and reviewed as appropriate before publication.</p></div>
      <div className="policy-list">
        <PolicyItem title="Privacy notice — draft for review">
          <p>This draft concerns information that may be collected when visitors submit inquiries, register for programs, volunteer, or participate in activities. The final notice must describe actual website forms, hosting, analytics, email, registration, and payment providers.</p>
          <h4>Information and purposes</h4><p>Information may include name and contact details, program or volunteer inquiries, relevant background, messages, and technical logs where enabled. It may be used to reply, manage applications, communicate course updates, coordinate activities, protect security, maintain appropriate records, and meet legal obligations.</p>
          <h4>Sharing, security, and retention</h4><p>Information is not intended to be sold. It may be shared with authorized service providers where needed or disclosed where law permits or requires. The final operational process must explain safeguards, retention periods, access, correction, deletion requests, grievance handling, and applicable rights.</p>
          <h4>Children and third parties</h4><p>Programs involving children require appropriate safeguards and guardian authorization where required. External services have their own privacy practices. Do not submit passwords, payment credentials, or unnecessary sensitive information through this website.</p>
          <p><strong>Before publication:</strong> add the verified privacy contact, effective date, actual service providers, and reviewed data handling details.</p>
        </PolicyItem>
        <PolicyItem title="Website terms — draft for review">
          <p>This website provides general information about educational initiatives and proposed or available activities. Course availability, schedules, curriculum, fees, and requirements are indicative until confirmed for a specific program.</p>
          <p>Enrollment depends on the stated requirements, available places, and written confirmation. Website materials are educational information and are not legal, financial, professional, or employment advice. Users must not attempt unauthorized access, upload harmful content, misuse forms, infringe rights, or submit false information.</p>
          <p>External links are provided for convenience; the Trust does not automatically endorse or control third-party services. These terms and any limitation or dispute provisions require legal review and must be finalized for the Trust’s actual arrangements.</p>
        </PolicyItem>
        <PolicyItem title="Enrollment, cancellation, and refunds — draft for review">
          <p>Before enrollment, participants should be able to review prerequisites, schedule, delivery format, fees, inclusions, and completion requirements. Enrollment is confirmed only after the published requirements are met and written confirmation is provided.</p>
          <p>Program-specific cancellation windows, refund eligibility, processing times, schedule-change options, and any external software or examination costs must be stated before payment. If a paid program is cancelled, participants will be informed of applicable refund or alternative arrangements. Free activities may still have attendance and cancellation requirements for limited seats.</p>
          <p><strong>Not active payment terms:</strong> the final policy needs confirmed timeframes, support contact, actual fee workflow, and legal review before paid enrollment opens.</p>
        </PolicyItem>
        <PolicyItem title="Assessment and certificates — proposed template">
          <p>Each confirmed program should publish outcomes, assessment components, attendance expectations, submission deadlines, pass requirements, and certificate type before enrollment. Assessment may include quizzes, labs, assignments, demonstrations, projects, or presentations.</p>
          <ul><li>A participation certificate records participation and does not necessarily certify mastery.</li><li>A completion certificate records meeting the published completion criteria.</li><li>An achievement certificate should be issued only against defined assessment criteria.</li></ul>
          <p>A Trust certificate is not by itself a university degree, government license, statutory professional qualification, or third-party certification. Attendance thresholds, grading, make-up work, resubmission, AI-use rules, appeals, and certificate correction procedures remain to be approved for each program.</p>
        </PolicyItem>
        <PolicyItem title="Learner technical requirements and cloud costs">
          <p>Requirements must be course-specific. Programming and cloud activities generally work best on a laptop or desktop. An indicative planning baseline in the content brief is a modern 64-bit computer, 8 GB RAM, stable internet, updated browser, keyboard, and enough free storage; some tools may need more.</p>
          <p>Before enrollment, disclose software and supported versions, account requirements, required installation permissions, and whether any browser lab or loan equipment actually exists. Cloud platforms and AI services may charge for use; learners should review current provider terms, protect credentials, set budget alerts where available, and remove billable resources after labs.</p>
        </PolicyItem>
        <PolicyItem title="Learner portal and LMS">
          <p>A learner portal is not available through this website. If a program later uses a configured platform, access instructions will be sent through an official channel. Do not share passwords or sensitive documents through unverified links.</p>
          <p>Portal access, course materials, recorded sessions, assignments, quizzes, progress tracking, support, and peer-learning features will only be described once they are implemented and tested for that program.</p>
        </PolicyItem>
        <PolicyItem title="Learner code of conduct and safeguarding">
          <ul><li>Treat learners, trainers, volunteers, and staff with dignity; avoid harassment, bullying, discrimination, and intimidation.</li><li>Respect intellectual property, credit sources, and use technology and AI tools responsibly.</li><li>Protect passwords, accounts, personal information, and confidential materials.</li><li>Follow safety expectations and avoid cheating, plagiarism, or misrepresenting project work.</li><li>Use an established reporting route to raise concerns.</li></ul>
          <p>Trainers and mentors should maintain professional boundaries and handle learner information responsibly. Programs involving minors need suitable guardian consent, supervision, communications, photography permissions, and safeguards. A designated safeguarding contact and response process must be established before a program launches.</p>
        </PolicyItem>
        <PolicyItem title="Contributions and donation policy — not active">
          <p>Contributions will be accepted only through approved channels and after legal eligibility, banking and accounting processes, and applicable requirements are verified. Any restrictions, receipts, refunds, use of funds, and reporting arrangements must follow governing documents and applicable law.</p>
          <p>No contribution or tax-deduction claim is being made on this website. A receipt does not itself establish eligibility for a tax deduction. Publish the final policy and payment channel only after professional review and operational approval.</p>
        </PolicyItem>
      </div>
      <p className="policy-footer-note">These summaries are editorial drafts based on the supplied content package. They are not legal advice or adopted Trust policies.</p>
    </div></section>
  );
}
