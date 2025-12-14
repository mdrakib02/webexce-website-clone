import { AnimatedCursor } from "@/components/animated-cursor";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ProblemSection } from "@/components/problem-section";
import { ProcessSection } from "@/components/process-section";
import { ProjectsSection } from "@/components/project-section";
import { ScrollHeader } from "@/components/scroll-header";
import { ServicesSection } from "@/components/service-section";
import { SolutionSection } from "@/components/solution-section";
import { TrustSection } from "@/components/trust-section";


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
      
    </main>
  )
}
