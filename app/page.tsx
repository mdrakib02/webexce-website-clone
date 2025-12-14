import { AnimatedCursor } from "@/Components/animated-cursor";
import { ContactSection } from "@/Components/contact-section";
import { Footer } from "@/Components/footer";
import { Header } from "@/Components/header";
import { HeroSection } from "@/Components/hero-section";
import { ProblemSection } from "@/Components/problem-section";
import { ProcessSection } from "@/Components/process-section";
import { ProjectsSection } from "@/Components/project-section";
import { ScrollHeader } from "@/Components/scroll-header";
import { ServicesSection } from "@/Components/service-section";
import { SolutionSection } from "@/Components/solution-section";
import { TrustSection } from "@/Components/trust-section";


export default function Home() {
  return (
    <main className="min-h-screen">
      <AnimatedCursor />
      <Header />
      <ScrollHeader />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <ProjectsSection />
      <TrustSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
      {/* Footer sections */}
    </main>
  )
}
