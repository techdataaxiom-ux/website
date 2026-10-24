import HeroSection from "@/components/HeroSection";
import AIWorkflowSection from "@/components/AIWorkflowSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import TrainingSection from "@/components/TrainingSection";
import ClientsSection from "@/components/ClientsSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AIWorkflowSection />
      <AboutSection />
      <ExpertiseSection />
      <ProjectsSection />
      <TrainingSection />
      <ClientsSection />
      <ContactSection />
    </>
  );
}
