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

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <ObjectivesSection />
        <ProgramsSection />
        <DetailedProgramsSection />
        <AISection />
        <BootcampsSection />
        <LearningApproachSection />
        <AccessSection />
        <FreeEducationSection />
        <RuralEducationSection />
        <ScholarshipsSection />
        <MissionSection />
        <ImpactSection />
        <InvolvedSection />
        <PartnershipsSection />
        <SupportSection />
        <ResourcesSection />
        <GovernanceSection />
        <ContactSection />
        <FAQSection />
        <PolicyHubSection />
        <PrivacySection />
      </main>
      <Footer />
    </>
  );
}
