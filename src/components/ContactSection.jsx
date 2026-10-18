import { useState } from "react";
import { headlessApi } from "../api.js";

const topics = [
  "Course enrollment",
  "Free education or scholarships",
  "Volunteering or mentoring",
  "Institutional partnership",
  "Donations and educational support",
  "General inquiry",
  "Other",
];

export default function ContactSection() {
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");
  const configured = headlessApi.isConfigured;

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const values = new FormData(form);
    const inquiry = {
      name: String(values.get("name")).trim(),
      email: String(values.get("email")).trim(),
      phone: String(values.get("phone") || "").trim(),
      topic: String(values.get("topic")),
      message: String(values.get("message")).trim(),
      privacyConsent: values.get("privacyConsent") === "on",
      source: "website",
    };

    setSending(true);
    setMessage("Sending your inquiry…");
    setResult("");
    try {
      await headlessApi.submitInquiry(inquiry);
      form.reset();
      setMessage("Thank you. Your inquiry has been sent.");
      setResult("is-success");
    } catch {
      setMessage("We couldn’t send your inquiry right now. Please try again later.");
      setResult("is-error");
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="contact-section section-pad" id="contact">
      <div className="container contact-grid">
        <div className="contact-copy">
          <p className="section-kicker">LET’S TALK</p><h2>Good things<br/>start with a <em>hello.</em></h2>
          <p>Whether you’re curious about learning, volunteering, teaching, or collaborating, we’d be glad to hear from you.</p>
          <div className="contact-aside"><span className="contact-aside-icon">↗</span><p>Please don’t include passwords, payment details, or sensitive personal information in your message.</p></div>
          <p className="contact-location">SST Education Trust <span>Andhra Pradesh, India</span></p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-heading"><span>01 — YOUR NOTE</span><p>We’ll use these details to respond to your inquiry.</p></div>
          <label htmlFor="name">Your name <span>*</span></label>
          <input id="name" name="name" autoComplete="name" required maxLength="120" placeholder="How should we address you?"/>
          <div className="form-row">
            <div><label htmlFor="email">Email address <span>*</span></label><input id="email" name="email" type="email" autoComplete="email" required maxLength="254" placeholder="you@example.com"/></div>
            <div><label htmlFor="phone">Phone <small>optional</small></label><input id="phone" name="phone" type="tel" autoComplete="tel" maxLength="30" placeholder="Your number"/></div>
          </div>
          <label htmlFor="topic">What are you reaching out about? <span>*</span></label>
          <select id="topic" name="topic" required defaultValue=""><option value="">Choose a topic</option>{topics.map((topic) => <option key={topic}>{topic}</option>)}</select>
          <label htmlFor="message">Your message <span>*</span></label>
          <textarea id="message" name="message" rows="4" maxLength="3000" required placeholder="What would you like us to know?"/>
          <label className="consent-row"><input type="checkbox" name="privacyConsent" required/><span>I understand my details will be used to respond to this inquiry. <a href="#privacy">Read our privacy note.</a></span></label>
          <div className="form-submit"><button className="button button-dark" type="submit" disabled={sending || !configured}>{sending ? "Sending…" : <>Send your inquiry <span>↗</span></>}</button><span className="form-required">* Required</span></div>
          <p className={`form-status ${result}`} role="status" aria-live="polite">{message}</p>
          {!configured && <p className="form-setup-note">The inquiry form will be available when the Trust’s contact service is configured. For now, please check back later.</p>}
        </form>
      </div>
    </section>
  );
}
