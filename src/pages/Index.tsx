import { useEffect } from "react";
import { initScrollDepthTracking } from "@/lib/tracking";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofBar from "@/components/SocialProofBar";
import LiveSystemSection from "@/components/LiveSystemSection";
import ImpactSection from "@/components/ImpactSection";
import ClinicPainSection from "@/components/ClinicPainSection";
import ProblemsSection from "@/components/ProblemsSection";
import SimulationSection from "@/components/SimulationSection";
import ProcessSection from "@/components/ProcessSection";
import CalculatorSection from "@/components/CalculatorSection";
import ChatDemoSection from "@/components/ChatDemoSection";
import DashboardSection from "@/components/DashboardSection";
import SolutionsSection from "@/components/SolutionsSection";
import PathSelectorSection from "@/components/PathSelectorSection";
import WhatsAppAutomationSection from "@/components/WhatsAppAutomationSection";
import SecuritySection from "@/components/SecuritySection";
import WhyDifferentSection from "@/components/WhyDifferentSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactFormSection from "@/components/ContactFormSection";

import PacksSection from "@/components/PacksSection";
import FinalCTASection from "@/components/FinalCTASection";
import BrandTaglineFooter from "@/components/BrandTaglineFooter";
import FloatingChat from "@/components/FloatingChat";

const Index = () => {
  useEffect(() => {
    const cleanup = initScrollDepthTracking();
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0b0b]">
      <Navbar />
      <HeroSection />
      <SocialProofBar />
      <LiveSystemSection />
      <ImpactSection />
      <ClinicPainSection />
      <SimulationSection />
      <ChatDemoSection />
      <ProblemsSection />
      <ProcessSection />
      <CalculatorSection />
      <DashboardSection />
      <SolutionsSection />
      <PathSelectorSection />
      <WhatsAppAutomationSection />
      <SecuritySection />
      <WhyDifferentSection />
      <TestimonialsSection />
      <PacksSection />
      <FAQSection />
      <ContactFormSection />
      <FinalCTASection />

      <BrandTaglineFooter />
      <FloatingChat />
    </div>
  );
};

export default Index;
