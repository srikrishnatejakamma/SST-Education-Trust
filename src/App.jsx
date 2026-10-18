import { useEffect } from "react";
import { Link, Route, Routes, useLocation, useNavigate } from "react-router";
import AboutSection from "./components/AboutSection.jsx";
import AccessSection from "./components/AccessSection.jsx";
import DetailedProgramsSection from "./components/DetailedProgramsSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import { FAQSection, PrivacySection } from "./components/FAQSection.jsx";
import { AISection, GovernanceSection, ResourcesSection, RuralEducationSection } from "./components/FoundationSections.jsx";
import HeroSection from "./components/HeroSection.jsx";
import InvolvedSection from "./components/InvolvedSection.jsx";
import LearningApproachSection from "./components/LearningApproachSection.jsx";
import MissionSection from "./components/MissionSection.jsx";
import ObjectivesSection from "./components/ObjectivesSection.jsx";
import PolicyHubSection from "./components/PolicyHubSection.jsx";
import { BootcampsSection, FreeEducationSection, ImpactSection, PartnershipsSection, ScholarshipsSection, SupportSection } from "./components/OpportunitySections.jsx";
import ProgramsSection from "./components/ProgramsSection.jsx";
import { Footer, Header } from "./components/SiteChrome.jsx";

const hashRoutes = {
  home: "/",
  about: "/about-us",
  objectives: "/vision-mission",
  mission: "/vision-mission",
  programs: "/programs",
  "course-catalog": "/programs/course-catalogue",
  bootcamps: "/programs/boot-camps",
  approach: "/about-us",
  "free-learning": "/scholarships",
  scholarships: "/scholarships",
  "rural-education": "/digital-education",
  "ai-emerging": "/ai-emerging-technologies",
  "get-involved": "/volunteer",
  partnerships: "/partnerships",
  support: "/donate",
  impact: "/impact",
  resources: "/resources",
  governance: "/governance-transparency",
  policies: "/policies",
  privacy: "/policies/privacy",
  contact: "/contact",
};

function HomePage() {
  return <><HeroSection/><AboutSection/><ProgramsSection/><AccessSection/><ImpactSection/><InvolvedSection/></>;
}

function AboutPage() {
  return <><AboutSection/><ObjectivesSection/><MissionSection/><LearningApproachSection/></>;
}

function ProgramsPage() {
  return <><ProgramsSection/><DetailedProgramsSection/><BootcampsSection/></>;
}

function ScholarshipsPage() {
  return <><FreeEducationSection/><AccessSection/><ScholarshipsSection/></>;
}

function PartnershipsPage() {
  return <><PartnershipsSection/><SupportSection/></>;
}

function GovernancePage() {
  return <><GovernanceSection/><PolicyHubSection/><PrivacySection/></>;
}

function ContactPage() {
  return <><ContactSection/><FAQSection/></>;
}

function DigitalEducationPage() {
  return <><RuralEducationSection/><FreeEducationSection/></>;
}

function RouteEffects() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    const titles = {
      "/": "Home",
      "/about-us": "About Us",
      "/vision-mission": "Vision & Mission",
      "/programs": "Our Programs",
      "/programs/course-catalogue": "Course Catalogue",
      "/programs/boot-camps": "Boot Camps & Workshops",
      "/scholarships": "Scholarships",
      "/digital-education": "Digital Education",
      "/ai-emerging-technologies": "AI & Emerging Technologies",
      "/partnerships": "Industry Partnerships",
      "/impact": "Our Impact",
      "/resources": "Resources",
      "/volunteer": "Volunteer",
      "/governance-transparency": "Governance & Transparency",
      "/donate": "Support Education",
      "/contact": "Contact Us",
      "/faq": "Frequently Asked Questions",
      "/policies": "Policies",
      "/policies/privacy": "Privacy Notice",
      "/terms": "Terms of Use",
    };
    document.title = `${titles[location.pathname] || "Page not found"} | Sri Surya Teja Foundation`;
  }, [location.pathname]);

  useEffect(() => {
    function redirectMissingSection(event) {
      const anchor = event.target.closest?.('a[href^="#"]');
      if (!anchor) return;
      const sectionId = anchor.getAttribute("href").slice(1);
      if (document.getElementById(sectionId)) return;
      const route = hashRoutes[sectionId];
      if (!route) return;
      event.preventDefault();
      navigate(route);
    }

    document.addEventListener("click", redirectMissingSection);
    return () => document.removeEventListener("click", redirectMissingSection);
  }, [navigate, location.pathname]);

  return null;
}

function NotFoundPage() {
  return <section className="not-found section-pad"><div className="container"><p className="section-kicker">404 · PAGE NOT FOUND</p><h1>Let’s find your<br/><em>next step.</em></h1><p>The page may have moved. Use the navigation to continue exploring the Foundation’s proposed education programs.</p><Link className="button button-dark" to="/">Go to home <span>↗</span></Link></div></section>;
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <RouteEffects />
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about-us" element={<AboutPage/>}/>
          <Route path="/vision-mission" element={<><ObjectivesSection/><MissionSection/></>}/>
          <Route path="/programs" element={<ProgramsPage/>}/>
          <Route path="/programs/course-catalogue" element={<DetailedProgramsSection/>}/>
          <Route path="/programs/boot-camps" element={<BootcampsSection/>}/>
          <Route path="/scholarships" element={<ScholarshipsPage/>}/>
          <Route path="/digital-education" element={<DigitalEducationPage/>}/>
          <Route path="/ai-emerging-technologies" element={<AISection/>}/>
          <Route path="/partnerships" element={<PartnershipsPage/>}/>
          <Route path="/csr-partnerships" element={<PartnershipsPage/>}/>
          <Route path="/impact" element={<ImpactSection/>}/>
          <Route path="/resources" element={<ResourcesSection/>}/>
          <Route path="/volunteer" element={<InvolvedSection/>}/>
          <Route path="/governance-transparency" element={<GovernancePage/>}/>
          <Route path="/donate" element={<SupportSection/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/faq" element={<FAQSection/>}/>
          <Route path="/policies" element={<PolicyHubSection/>}/>
          <Route path="/policies/privacy" element={<><PrivacySection/><PolicyHubSection/></>}/>
          <Route path="/terms" element={<PolicyHubSection/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </main>
      <Footer />
    </>
  );
}
