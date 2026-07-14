import HeroSection from "@/components/HeroSection";
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
      <AboutSection />
      <ExpertiseSection />
      <TrainingSection />
      <ProjectsSection />
      <ClientsSection />
      <ContactSection />
    </>
  );
}
