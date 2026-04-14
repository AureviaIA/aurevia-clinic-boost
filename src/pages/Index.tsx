import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LiveSystemSection from "@/components/LiveSystemSection";
import ImpactSection from "@/components/ImpactSection";
import ProblemsSection from "@/components/ProblemsSection";
import ProcessSection from "@/components/ProcessSection";
import CalculatorSection from "@/components/CalculatorSection";
import ChatDemoSection from "@/components/ChatDemoSection";
import DashboardSection from "@/components/DashboardSection";
import SolutionsSection from "@/components/SolutionsSection";
import WhyDifferentSection from "@/components/WhyDifferentSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import BonusSection from "@/components/BonusSection";
import ContactFormSection from "@/components/ContactFormSection";
import BenefitsSection from "@/components/BenefitsSection";
import FloatingChat from "@/components/FloatingChat";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0b0b0b]">
      <Navbar />
      <HeroSection />
      <LiveSystemSection />
      <ImpactSection />
      <ProblemsSection />
      <ProcessSection />
      <CalculatorSection />
      <ChatDemoSection />
      <DashboardSection />
      <SolutionsSection />
      <WhyDifferentSection />
      <TestimonialsSection />
      <FAQSection />
      <BonusSection />
      <ContactFormSection />
      <BenefitsSection />
      <FloatingChat />
    </div>
  );
};

export default Index;
